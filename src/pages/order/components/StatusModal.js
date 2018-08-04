import React from 'react'
import {Modal, Button, Row, Col} from 'antd'
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import images from '../../../utils/images'
import withRouter from 'umi/withRouter'

class StatusModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'success',
      visible: false,
      modalState: {
        success: {
          icon: 'success',
          okText: '继续下单',
          cancelText: '返回订单列表',
          text: '恭喜您支付成功，订单已提交！',
          okHandler: this.successHandler,
          cancelHandler: this.goOrder
        },
        error: {
          icon: 'error',
          okText: '去充值',
          cancelText: '返回订单列表',
          text: '支付失败，当前账户余额不足！',
          okHandler: this.rechargeHandler,
          cancelHandler: this.goOrder
        }
      }
    }
  }

  successHandler = () => {
    this.props.dispatch(routerRedux.push({
      pathname: '/order/doOrder',
    }))
  }

  rechargeHandler = () => {
    this.props.dispatch(routerRedux.push({
      pathname: '/account/balance',
    }))
  }

  goOrder = () => {
    this.props.dispatch(routerRedux.push({
      pathname: '/order',
    }))
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation()
    this.setState({
      visible: true
    })
  }

  hideModelHandler = (e) => {
    if (e) e.stopPropagation()
    this.setState({
      visible: false
    })
  }

  doPay = () => {
    this.props.dispatch({
      type: 'orderDetail/doPay',
      payload: {
        id: this.props.location.query.id
      }
    }).then(() => {
      if (this.props.isSuccess === 'success') {
        this.setState({
          status: 'success',
          visible: true
        })
        this.props.dispatch(routerRedux.push({
          pathname: '/order/orderDetail',
          query: {
            id: this.props.location.query.id
          }
        }))
      } else if (this.props.isSuccess === 'error') {
        this.setState({
          status: 'error',
          visible: true
        })
      }
    })
  }

  render() {
    const state = this.state.status
    const modalState = this.state.modalState[state]
    return (
      <div style={{cursor: 'pointer', color: '#3477ED', display: 'inline-block'}}>
        <Button type='primary' onClick={this.doPay} loading={this.props.loading}>立即支付</Button>
        <Modal
          title='提示'
          visible={this.state.visible}
          footer={null}
          onCancel={this.hideModelHandler}
          bodyStyle={{textAlign: 'center', fontSize: 16, fontFamily: 'PingFangHK-Medium'}}
          destroyOnClose={true}
        >
          <div>
            <img src={images[modalState.icon]} alt=""/>
          </div>
          <div style={{marginTop: 30}}>{modalState.text}</div>
          <Row type='flex' justify='space-around' style={{margin: '40px 35px 0 35px'}}>
            <Col>
              <Button onClick={modalState.cancelHandler ? modalState.cancelHandler : this.hideModelHandler}
                      className={'grayButton'}>{modalState.cancelText}</Button>
            </Col>
            <Col>
              <Button onClick={modalState.okHandler} type='primary' style={{width: 120}}>{modalState.okText}</Button>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {isSuccess} = state.orderDetail
  // const {billLoading} = state.logisticsDetail
  return {
    isSuccess,
    loading: state.loading.models.orderDetail
  }
}

export default connect(mapStateToProps)(withRouter((StatusModal)))