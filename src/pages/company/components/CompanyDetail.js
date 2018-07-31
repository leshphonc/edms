import React from 'react'
import {Row, Col, Form, Upload, Input, Select, Button, Icon, Modal, message} from 'antd'
import {connect} from 'dva'
import styles from '../company.css'
import {IP} from "../../../constants";

const FormItem = Form.Item
const Option = Select.Option

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: '',
      }],
      submitLoading: false
    }
  }

  UNSAFE_componentWillMount() {
    this.props.dispatch({
      type: 'company/fetchCompanyDetail'
    }).then(() => {
      this.setState({
        fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: this.props.companyDetail.certificate,
        }]
      })
    })
  }

  saveForm = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          submitLoading: true
        })
        this.props.imgUrl ? values.certificate = this.props.imgUrl : this.props.imgUrl = ''
        this.props.dispatch({
          type: 'company/modifyCompany',
          payload: {
            form: values
          }
        }).then(() => {
          this.setState({
            editable: false
          })
        })
      }
    })
  }

  editForm = () => {
    this.setState({
      editable: true
    })
  }

  cacelForm = () => {
    this.props.form.resetFields()
    this.setState({
      editable: false
    })
  }

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleRemove = () => {
    if (!this.state.editable) return false
  }

  handleChange = ({fileList}) => this.setState({fileList})

  beforeUpload = (file) => {
    const isJPG = file.type === 'image/png';
    if (!isJPG) {
      message.error('You can only upload PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M
  }

  customRequest = (file) => {
    this.props.dispatch({
      type: 'company/postImg',
      payload: file
    })
  }

  render() {
    const {previewVisible, previewImage, fileList} = this.state
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {span: 2},
      wrapperCol: {span: 5}
    }
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <Form style={{margin: '0 30px'}}>
        <div className={styles.title}>1.证件信息</div>
        <FormItem
          {...formItemLayout}
          label="证件照片"
        >
          {getFieldDecorator('certificate', {
            initialValue: this.props.companyDetail.certificate,
            rules: [{required: true, message: 'Please input your note!'}],
          })(
            <div>
              <div className="clearfix">
                <Upload
                  accept='.png'
                  name='CompanyForm[img]'
                  action={`${IP}/home/company/img`}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onRemove={this.handleRemove}
                  onChange={this.handleChange}
                  beforeUpload={this.beforeUpload}
                  customRequest={this.customRequest}
                >
                  {(fileList.length >= 1 || !this.state.editable) ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
              </div>
            </div>
          )}
        </FormItem>
        <div className={styles.title}>2.公司信息</div>
        <FormItem
          {...formItemLayout}
          label="公司全称"
        >
          {getFieldDecorator('full_name', {
            rules: [{required: true, message: 'Please input your note!'}],
            initialValue: this.props.companyDetail.full_name
          })(
            <Input placeholder="请填写公司全称..." disabled={!this.state.editable}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="法定代表人"
        >
          {getFieldDecorator('corporation', {
            rules: [{required: true, message: 'Please input your note!'}],
            initialValue: this.props.companyDetail.corporation
          })(
            <Input placeholder="请填写法定代表人..." disabled={!this.state.editable}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="办公地址"
        >
          {getFieldDecorator('addr', {
            rules: [{required: true, message: 'Please input your note!'}],
            initialValue: this.props.companyDetail.addr
          })(
            <Input placeholder="请填写办公地址..." disabled={!this.state.editable}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="公司固话"
        >
          {getFieldDecorator('fixed_telephone', {
            rules: [{required: true, message: 'Please input your note!'}],
            initialValue: this.props.companyDetail.fixed_telephone
          })(
            <Input placeholder="请填写公司固话..." disabled={!this.state.editable}/>
          )}
        </FormItem>
        <div className={styles.title}>3.联系方式</div>
        <FormItem
          {...formItemLayout}
          label="联系人"
        >
          {getFieldDecorator('contact', {
            rules: [{required: true, message: 'Please input your note!'}],
            initialValue: this.props.companyDetail.contact
          })(
            <Input placeholder="请填写联系人..." disabled={!this.state.editable}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号"
        >
          {getFieldDecorator('contact_mobile', {
            rules: [{required: true, message: 'Please input your note!'}],
            initialValue: this.props.companyDetail.contact_mobile
          })(
            <Input placeholder="请填写手机号..." disabled={!this.state.editable}/>
          )}
        </FormItem>
        <div className={styles.title}>4.公司类型</div>
        <FormItem
          {...formItemLayout}
          label="请选择公司类型"
        >
          {getFieldDecorator('company_type', {
            initialValue: this.props.companyDetail.company_type
          })(
            <Select placeholder="请选择公司类型..." style={{width: 150}} disabled={!this.state.editable}>
              <Option value="0">没有类型</Option>
              <Option value="1">贸易商</Option>
              <Option value="2">运贸商</Option>
              <Option value="3">液厂</Option>
              <Option value="4">接收站</Option>
              <Option value="5">其它</Option>
            </Select>
          )}
        </FormItem>
        <Row style={{width: 500, margin: '42px 0 20px 85px'}}>
          {!this.state.editable ?
            <Col span={5} offset={2}>
              <Button type='primary' style={{width: 100}} onClick={this.editForm}>编辑</Button>
            </Col>
            :
            <div>
              <Col span={5} offset={2}>
                <Button type='primary' style={{width: 100}} onClick={this.saveForm}
                        loading={this.state.submitLoading}>保存</Button>
              </Col>
              <Col span={5} offset={2}>
                <Button className='grayButton' style={{width: 100}} onClick={this.cacelForm}>取消</Button>
              </Col>
            </div>
          }
        </Row>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  const {companyDetail, imgUrl} = state.company
  return {
    companyDetail,
    imgUrl,
    loading: state.loading.models.company
  }
}

export default connect(mapStateToProps)(Form.create()(CompanyDetail))
