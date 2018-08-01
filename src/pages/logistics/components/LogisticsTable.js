import React from 'react'
import {Table, Button, Modal, Row, Col, Form, Input, Select, Pagination, DatePicker} from 'antd'
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import styles from '../logistics.css'
import PromptModal from '../../../components/PromptModal/PromptModal'
import PoundModal from './PoundModal'
import {PAGE_SIZE} from "../../../constants";

const FormItem = Form.Item
const Option = Select.Option

class Logistics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      acceptBtn: false,
      refuseBtn: false,
      schedulingBtn: false,
      id: '',
      uploading: false
    }
  }

  logisticsDetail = (id) => {
    this.props.dispatch(routerRedux.push({
      pathname: '/logistics/logisticsDetail',
      query: {
        id: id
      }
    }))
  }

  scheduling = (id) => {
    this.setState({
      schedulingBtn: true,
      id: id
    })
    this.props.dispatch({
      type: 'logisticsDetail/getDetail',
      payload: {
        id: id
      }
    }).then(() => {
      this.props.dispatch({
        type: 'logisticsDetail/getCompanyOption'
      }).then(() => {
        this.setState({
          visible: true,
          schedulingBtn: false
        })
        const detailForm = this.props.detailForm
        this.props.form.setFieldsValue({
          zhuanghuolianxiren: detailForm.cargo_contact,
          zhuanghuolianxidianhua: detailForm.cargo_mobile,
          zhuanghuoshuliang: detailForm.load_num,
          zhuanghuodizhi: detailForm.cargo_province + (detailForm.cargo_city ? detailForm.cargo_city : '') + (detailForm.cargo_area ? detailForm.cargo_area : ''),
          zhuanghuoxiangxidizhi: detailForm.detaileds_address,
          shouhuolianxiren: detailForm.recv_contact,
          shouhuolianxidianhua: detailForm.recv_phone,
          shouhuoshijian: detailForm.recv_time,
          shouhuoshuliang: detailForm.saler_num,
          shouhuodizhi: detailForm.delivery_province + (detailForm.delivery_city ? detailForm.delivery_city : '') + (detailForm.delivery_area ? detailForm.delivery_area : ''),
          shouhuoxiangxidizhi: detailForm.detailed_address,
        })
      })
    })
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  submit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        delete values.edingzaizhong
        delete values.shouhuodizhi
        delete values.shouhuolianxiren
        delete values.shouhuolianxidianhua
        delete values.shouhuoshijian
        delete values.shouhuoshuliang
        delete values.shouhuoxiangxidizhi
        delete values.siji
        delete values.yayunyuan
        delete values.zhuanghuodizhi
        delete values.zhuanghuolianxiren
        delete values.zhuanghuolianxidianhua
        delete values.zhuanghuoshuliang
        delete values.zhuanghuoxiangxidizhi
        values.expect_time = values.expect_time.format('YYYY-MM-DD hh:00:00')
        values.id = this.state.id
        this.props.dispatch({
          type: 'logisticsDetail/doDispatch',
          payload: {
            form: values
          }
        }).then(() => {
          this.setState({
            visible: false,
          })
        })
      }
    })
  }


  pageChangeHandler = (page) => {
    this.props.dispatch(routerRedux.push({
      pathname: '/logistics',
      query: {page}
    }))
  }

  acceptOrder = (id, e) => {
    e.stopPropagation()
    this.setState({
      acceptBtn: true
    })
    this.props.dispatch({
      type: 'logistics/acceptOrder',
      payload: {
        id: id
      }
    }).then(() => {
      this.setState({
        acceptBtn: false
      })
    })
  }

  refuseOrder = (id, e) => {
    e.stopPropagation()
    this.setState({
      refuseBtn: true
    })
    this.props.dispatch({
      type: 'logistics/refuseOrder',
      payload: {
        id: id
      }
    }).then(() => {
      this.setState({
        refuseBtn: false
      })
    })
  }

  companyChange = (value, item) => {
    this.props.dispatch({
      type: 'logisticsDetail/getCarOption',
      payload: {
        logistic_company: value
      }
    })
    this.props.form.resetFields('chetoupaizhao')
  }

  bodyChange = (value, item) => {
    this.props.form.setFieldsValue({
      edingzaizhong: item.props.load,
    })
  }

  driverChange = (value, item) => {
    this.props.form.setFieldsValue({
      driver_mobile: item.props.phone,
    })
  }

  supercargoChange = (value, item) => {
    this.props.form.setFieldsValue({
      supercargo_mobile: item.props.phone,
    })
  }

  customRequest = (id, type, file) => {
    this.setState({
      uploading: true
    })
    this.props.dispatch({
      type: 'logisticsDetail/uploadPound',
      payload: {
        file,
        id,
        load_type: type
      }
    }).then(() => {
      this.setState({
        uploading: false
      })
    })
  }


  render() {
    const {tableKey, list, page, total, list2, page2, total2, companyOption, carOption, loading} = this.props
    const {getFieldDecorator} = this.props.form
    const companyOptions = companyOption.map((option, index) =>
      <Option key={index} value={option.logistic_company}>{option.logistic_company}</Option>)
    const carHeadOptions = carOption.car_head.map((option, index) =>
      <Option key={index} value={option.car_head}>{option.car_head}</Option>
    )
    const carBodyOptions = carOption.car_body.map((option, index) =>
      <Option key={index} value={option.car_body} load={option.rated_load}>{option.car_body}</Option>
    )
    const driverOptions = carOption.driver.map((option, index) =>
      <Option key={index} value={option.driver} phone={option.driver_mobile}>{option.driver}</Option>
    )
    const supercargoOptions = carOption.supercargo.map((option, index) =>
      <Option key={index} value={option.supercargo} phone={option.supercargo_mobile}>{option.supercargo}</Option>
    )
    const columns = [
      {
        title: '运单编号',
        dataIndex: 'deliver_code',
        key: 'deliver_code',
        align: 'center'
      },
      {
        title: '气源名称',
        dataIndex: 'name_gas_source',
        key: 'name_gas_source',
        align: 'center',
        width: 120
      },
      {
        title: '数量（吨）',
        dataIndex: 'saler_num',
        key: 'saler_num',
        align: 'center',
        width: 120
      },
      {
        title: '装货地址',
        key: 'detailed_address',
        align: 'center',
        width: 120,
        render: (text, record, index) => {
          return <div>{record.cargo_province + record.cargo_city ? record.cargo_city : '' + record.cargo_area ? record.cargo_area : '' + record.cargo_detailed_address}</div>
        }
      },
      {
        title: '装货联系人',
        dataIndex: 'cargo_contact',
        key: 'cargo_contact',
        align: 'center'
      },
      {
        title: '联系电话',
        dataIndex: 'cargo_mobile',
        key: 'cargo_mobile',
        align: 'center'
      },
      {
        title: '收货地址',
        key: 'address',
        align: 'center',
        width: 120,
        render: (text, record, index) => {
          return <div>{record.delivery_province + record.delivery_city ? record.delivery_city : '' + record.delivery_area ? record.delivery_area : '' + record.detailed_address}</div>
        }
      },
      {
        title: '收货联系人',
        dataIndex: 'recv_contact',
        key: 'recv_contact',
        align: 'center',
      },
      {
        title: '联系电话',
        dataIndex: 'recv_phone',
        key: 'recv_phone',
        align: 'center',
      },
      {
        title: '交货时间',
        dataIndex: 'recv_time',
        key: 'recv_time',
        align: 'center',
      },
      {
        title: '运单状态',
        dataIndex: 'status_name',
        key: 'status_name',
        align: 'center',
        width: 120
      },
      {
        title: '运单操作',
        align: 'center',
        key: 'operation',
        dataIndex: 'deliver_status',
        fixed: 'right',
        render: (text, record, index) => {
          return (
            <div className={'operating'}>
              {text === '1' ?
                <Button style={{width: 88}} type='primary' onClick={this.scheduling.bind(null, record.id)}
                        loading={this.state.schedulingBtn}>调度</Button>
                :
                text === '2' || text === '3' || text === '4' ?
                  <PromptModal state={'cancelLogistics'} cancelID={record.id}>
                    <Button type='primary' style={{background: '#EA7878', borderColor: '#EA7878'}}>取消运单</Button>
                  </PromptModal>
                  :
                  text === '6' ?
                    <PoundModal title={'查看磅单'} type={'look'} hidden='all' load_num={record.load_num}
                                load_url={record.load_url}
                                unload_num={record.unload_num} unload_url={record.unload_url}>
                      <Button>查看磅单</Button>
                    </PoundModal>
                    :
                    <PoundModal title={'确认磅单'} hidden='all' load_num={record.load_num} load_url={record.load_url}
                                unload_num={record.unload_num} unload_url={record.unload_url} id={record.id}>
                      <Button type='primary' style={{background: '#59C694', borderColor: '#59C694'}}>确认磅单</Button>
                    </PoundModal>
              }
            </div>
          )
        }
      },
      {
        title: '司机操作',
        align: 'center',
        key: 'deliver_status2',
        dataIndex: 'deliver_status',
        fixed: 'right',
        render: (text, record, index) => {
          return (
            <div className={'operating'}>
              {text === '2' ?
                <div>
                  <Button className='blueBorder' onClick={this.acceptOrder.bind(null, record.id)}
                          loading={this.state.acceptBtn}>接单</Button>
                  <Button onClick={this.refuseOrder.bind(null, record.id)}
                          style={{marginLeft: 5, color: '#FF4241', borderColor: '#FF4241'}}
                          loading={this.state.refuseBtn}>拒绝</Button>
                </div> :
                text === '3' ?
                  <PoundModal title={'上传装车磅单'} load_num={record.load_num} load_url={record.load_url}
                              hidden={'load'} id={record.id}>
                    <Button>上传装车磅单</Button>
                  </PoundModal> :
                  text === '4' ?
                    <PoundModal title={'上传卸车磅单'} unload_num={record.unload_num}
                                unload_url={record.unload_url} hidden={'unload'} id={record.id}>
                      <Button>上传卸车磅单</Button>
                    </PoundModal> : '--'
              }
            </div>
          )
        }
      },
      {
        title: '运单详情',
        align: 'center',
        key: 'operation2',
        fixed: 'right',
        render: (text, record, index) => {
          return (
            <div className={'operating'}>
              <Button onClick={this.logisticsDetail.bind(null, record.id)}>查看详情</Button>
            </div>
          )
        }
      }
    ]
    const columns2 = [
      {
        title: '运单编号',
        dataIndex: 'deliver_code',
        key: 'deliver_code',
        width: 140,
        align: 'center',
        fixed: 'left'
      },
      {
        title: '物流公司',
        dataIndex: 'logistics_company',
        key: 'logistics_company',
        width: 120,
        align: 'center'
      },
      {
        title: '车头牌照',
        dataIndex: 'car_head',
        key: 'car_head',
        width: 100,
        align: 'center',
      },
      {
        title: '装货地址',
        key: 'loadDetail',
        width: 240,
        align: 'center',
        render: (text, record, index) => {
          return record.cargo_province + (record.cargo_city ? record.cargo_city : '') + (record.cargo_area ? record.cargo_area : '') + record.detailed_address
        }
      },
      {
        title: '装车时间',
        dataIndex: 'load_time',
        key: 'load_time',
        width: 120,
        align: 'center'
      },
      {
        title: '卸车时间',
        dataIndex: 'unload_time',
        key: 'unload_time',
        width: 120,
        align: 'center'
      },
      {
        title: '供货商名称',
        dataIndex: 'supp_name',
        key: 'supp_name',
        width: 120,
        align: 'center'
      },
      {
        title: '客户名称',
        dataIndex: 'customer_name',
        key: 'customer_name',
        width: 120,
        align: 'center',
      },
      {
        title: '站点简称',
        dataIndex: 'site_name',
        key: 'site_name',
        width: 120,
        align: 'center',
      },
      {
        title: '装车吨位',
        dataIndex: 'load_num',
        key: 'load_num',
        width: 100,
        align: 'center',
      },
      {
        title: '卸车吨位',
        dataIndex: 'unload_num',
        key: 'unload_num',
        width: 100,
        align: 'center',
      },
      {
        title: '结算吨位',
        dataIndex: 'final_num',
        key: 'final_num',
        width: 100,
        align: 'center',
      },
      {
        title: '公里数',
        dataIndex: 'distance',
        key: 'distance',
        width: 80,
        align: 'center',
      },
      {
        title: '吨公里（元）',
        dataIndex: 'wl_deliver_price',
        key: 'wl_deliver_price',
        width: 140,
        align: 'center',
      },
      {
        title: '额外费用（元）',
        dataIndex: 'wl_extra_fee',
        key: 'wl_extra_fee',
        width: 160,
        align: 'center',
      },
      {
        title: '运费总计（元）',
        key: 'total',
        width: 160,
        align: 'center',
        render: (text, record, index) => {
          return (record.distance - 0) * (record.wl_deliver_price - 0) * (record.final_num - 0) + (record.wl_extra_fee - 0)
        }
      }
    ]
    return (
      <div>
        {tableKey === '1' ?
          <div>
            <Table
              columns={columns}
              dataSource={list}
              rowKey={record => record.id}
              pagination={false}
              loading={loading}
              scroll={{x: 1800}}
            />
            <Pagination
              className="ant-table-pagination"
              total={total}
              current={page}
              pageSize={PAGE_SIZE}
              onChange={this.pageChangeHandler}
            />
          </div>
          :
          <div>
            <Table
              columns={columns2}
              dataSource={list2}
              rowKey={record => record.deliver_code}
              pagination={false}
              loading={loading}
              scroll={{x: 1920}}
            />
            <Pagination
              className="ant-table-pagination"
              total={total2}
              current={page2}
              pageSize={PAGE_SIZE}
              onChange={this.pageChangeHandler}
            />
          </div>
        }
        <Modal
          width={740}
          title="调度"
          visible={this.state.visible}
          bodyStyle={{padding: 38, maxHeight: 540, overflow: 'auto'}}
          footer={[
            <Row key='row' type='flex' justify='center' style={{margin: '10px 0'}}>
              <Col key='col'>
                <Button key='submit' type='primary' onClick={this.submit}>确定调度</Button>
              </Col>
            </Row>
          ]}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <Form>
            <div className={styles.pageName}>1.物流公司信息</div>
            <FormItem
              label="选择物流公司"
              labelCol={{span: 4}}
              wrapperCol={{span: 9}}
            >
              {getFieldDecorator('logistics_company', {
                rules: [{required: true, message: '此项为必选项！'}],
              })(
                <Select placeholder="请选择物流公司..." style={{marginLeft: 8}} onChange={this.companyChange}>
                  {companyOptions}
                </Select>
              )}
            </FormItem>
            <div className={styles.pageName}>2.车辆信息</div>
            <Row>
              <Col span={12}>
                <FormItem
                  label="车头牌照"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('car_head', {
                    rules: [{required: true, message: '此项为必选项！'}],
                  })(
                    <Select placeholder="请选车头牌照...">
                      {carHeadOptions}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="车挂牌照"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('car_body', {
                    rules: [{required: true, message: '此项为必选项！'}],
                  })(
                    <Select placeholder="请选车挂牌照..." onChange={this.bodyChange}>
                      {carBodyOptions}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  label="额定载重"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('edingzaizhong', {
                    rules: [{required: true, message: '此项为必选项！'}],
                  })(
                    <Input placeholder='选择车挂后显示...' disabled addonAfter={'吨'}/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <div className={styles.pageName}>3.司机信息</div>
            <Row>
              <Col span={12}>
                <FormItem
                  label="司机"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('siji', {
                    rules: [{required: true, message: '此项为必选项！'}],
                  })(
                    <Select placeholder="请选择司机..." onChange={this.driverChange}>
                      {driverOptions}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="联系电话"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('driver_mobile')(
                    <Input placeholder="选择司机后显示..." disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  label="押运员"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('yayunyuan', {
                    rules: [{required: true, message: '此项为必选项！'}],
                  })(
                    <Select placeholder="请选择押运员..." onChange={this.supercargoChange}>
                      {supercargoOptions}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="联系电话"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('supercargo_mobile')(
                    <Input placeholder="选择押运员后显示..." disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <div className={styles.pageName}>4.装货信息</div>
            <Row>
              <Col span={12}>
                <FormItem
                  label="装货联系人"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('zhuanghuolianxiren')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="联系电话"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('zhuanghuolianxidianhua')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  label="装货时间"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('expect_time', {
                    rules: [{required: true, message: '此项为必选项！'}],
                  })(
                    <DatePicker placeholder='请选择装货时间...' format={'YYYY-MM-DD hh:00:00'}></DatePicker>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="数量"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('zhuanghuoshuliang')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Col span={12} style={{padding: '0 10px'}}>
                  <FormItem
                    label="装货地址"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 15}}
                  >
                    {getFieldDecorator('zhuanghuodizhi')(
                      <Input disabled style={{marginLeft: 20}}/>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    label=""
                    labelCol={{span: 0}}
                    wrapperCol={{span: 20}}
                  >
                    {getFieldDecorator('zhuanghuoxiangxidizhi')(
                      <Input disabled/>
                    )}
                  </FormItem>
                </Col>
              </Col>
            </Row>
            <div className={styles.pageName}>5.收货信息</div>
            <Row>
              <Col span={12}>
                <FormItem
                  label="收货联系人"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('shouhuolianxiren')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="联系电话"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('shouhuolianxidianhua')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  label="收货时间"
                  labelCol={{span: 7}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('shouhuoshijian')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  label="数量"
                  labelCol={{span: 7, offset: 1}}
                  wrapperCol={{span: 13, offset: 1}}
                >
                  {getFieldDecorator('shouhuoshuliang')(
                    <Input disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Col span={12} style={{padding: '0 10px'}}>
                  <FormItem
                    label="收货地址"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 15}}
                  >
                    {getFieldDecorator('shouhuodizhi')(
                      <Input disabled style={{marginLeft: 20}}/>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    label=""
                    labelCol={{span: 0}}
                    wrapperCol={{span: 20}}
                  >
                    {getFieldDecorator('shouhuoxiangxidizhi')(
                      <Input disabled/>
                    )}
                  </FormItem>
                </Col>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {list, page, total, list2, page2, total2} = state.logistics
  const {detailForm, companyOption, carOption} = state.logisticsDetail
  return {
    list,
    page,
    total,
    list2,
    page2,
    total2,
    detailForm,
    companyOption,
    carOption,
    loading: state.loading.models.logistics
  }
}

export default Form.create()(connect(mapStateToProps)(Logistics))
