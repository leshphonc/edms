import {Table, Button, Pagination, Upload} from 'antd'
import {routerRedux} from "dva/router";
import {connect} from 'dva'
import {IP, PAGE_SIZE} from "../../../constants"

function mapStateToProps(state) {
  const {customerlist, customerpage, customertotal} = state.maintain
  return {
    customerlist,
    customerpage,
    customertotal,
    loading: state.loading.models.maintain
  }
}

export default connect(mapStateToProps)(({dispatch, loading, customerlist, customerpage, customertotal}) => {
  function editUser(type, record) {
    dispatch({
      type: 'maintain/save',
      payload: {
        editForm: record,
        currentTab: '1'
      }
    })
    dispatch(routerRedux.push({
      pathname: '/maintain/operateUser',
      query: {type: type}
    }))
  }

  function pageChangeHandler(page) {
    dispatch({
      type: 'maintain/fetchCustomer',
      payload: {page}
    })
  }

  function deleteOne(id) {
    dispatch({
      type: 'maintain/deleteCustomer',
      payload: {id}
    })
  }

  function customRequest(file) {
    dispatch({
      type: 'maintain/userImport',
      payload: file
    })
  }

  const columns = [{
    title: '客户名称',
    dataIndex: 'customer_name',
    key: 'customer_name',
    align: 'center',
    fixed: 'left',
  }, {
    title: '客户联系人',
    dataIndex: 'customer_contact',
    key: 'customer_contact',
    align: 'center',
  }, {
    title: '联系电话',
    dataIndex: 'customer_mobile',
    key: 'customer_mobile',
    align: 'center',
  }, {
    title: '站点简称',
    dataIndex: 'site_name',
    key: 'site_name',
    align: 'center',
  }, {
    title: '站点全称',
    dataIndex: 'full_site_name',
    key: 'full_site_name',
    align: 'center',
  }, {
    title: '收货联系人1',
    dataIndex: 'delivery_contact1',
    key: 'delivery_contact1',
    align: 'center',
  }, {
    title: '联系电话',
    dataIndex: 'delivery_mobile1',
    key: 'delivery_mobile1',
    align: 'center',
  }, {
    title: '收货联系人2',
    dataIndex: 'delivery_contact2',
    key: 'delivery_contact2',
    align: 'center',
  }, {
    title: '联系电话',
    dataIndex: 'delivery_mobile2',
    key: 'delivery_mobile2',
    align: 'center',
  }, {
    title: '收货地址',
    dataIndex: 'detailed_address',
    key: 'detailed_address',
    align: 'center',
    render: (text, record, index) => {
      return (
        <span>{record.delivery_province.name + (record.delivery_city !== 'undefined' ? record.delivery_city.name : '') + (record.delivery_area !== 'undefined' ? record.delivery_area.name : '') + record.detailed_address}</span>
      )
    }
  }, {
    title: '站点类型',
    dataIndex: 'site_type',
    key: 'site_type',
    align: 'center',
  }, {
    title: '用户类型',
    dataIndex: 'user_type',
    key: 'user_type',
    align: 'center',
  }, {
    title: '操作',
    align: 'center',
    key: 'createdAt',
    fixed: 'right',
    render: (text, record, index) => {
      return (
        <div className={'operating'}>
          <Button className={'blueBorder'} onClick={editUser.bind(null, 'edit', record)}
                  size={'small'}>编辑</Button>
          <Button type='primary' size={'small'} onClick={deleteOne.bind(null, record.id)}
                  style={{background: '#EA7878', borderColor: '#EA7878', marginLeft: 10}}>删除</Button>
        </div>
      )
    }
  }]
  return (
    <div>
      <div className={'toolBar'}>
        <Button type='primary' icon="plus"
                onClick={editUser.bind(null, 'insert', '')}>新增用户</Button>
        <Upload
          name='CustomerForm[excel]'
          showUploadList={false}
          action={`${IP}/admin/customer/add-by-excel`}
          customRequest={customRequest}
          style={{marginLeft: 10}}
        >
          <Button className={'blueBorder'} icon="plus">批量导入</Button>
        </Upload>
      </div>
      <Table
        columns={columns}
        dataSource={customerlist}
        rowKey={record => record.id}
        pagination={false}
        loading={loading}
        scroll={{x: 1500}}
      ></Table>
      <Pagination
        className="ant-table-pagination"
        current={customerpage}
        total={customertotal}
        pageSize={PAGE_SIZE}
        onChange={pageChangeHandler}
      />
    </div>
  )
})
