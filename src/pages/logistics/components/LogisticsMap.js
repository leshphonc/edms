import React, { PureComponent } from 'react'
import { Card, Icon, notification } from 'antd'
import { connect } from "dva/index"
import BMap from 'BMap'
import BMapLib from 'BMapLib'
import MapDetail from './MapDetail'
import { withRouter } from "react-router";

class LogisticsMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      alreadyDriven: 0,
      stillNeedTime: 0,
      totalDistance: 0,
      map: {}
    }
  }

  componentDidMount() {
    let map = new BMap.Map('mapContainer')
    // map.clearOverlays()
    this.setState({map})
    map.enableScrollWheelZoom(true)
    let myGeo = new BMap.Geocoder()
    let IconStart = new BMap.Icon(require('../../../assets/image/start_22_22.png'), new BMap.Size(19, 23))
    let IconEnd = new BMap.Icon(require('../../../assets/image/end_22_22.png'), new BMap.Size(19, 23))
    let transitS_C = new BMap.DrivingRoute(map, {
      onSearchComplete: this.setAlreadyDriven,
    })
    let transitC_E = new BMap.DrivingRoute(map, {
      onSearchComplete: this.setStillNeedTime,
    })
    let transitS_E = new BMap.DrivingRoute(map, {
      onSearchComplete: this.setTotalDistance,
    })
    let data = {}
    if (this.props.location.pathname.indexOf('/order') === 0) {
      data = this.props.currentOrder
      if (data === 0) {
        notification.error({
          message: '温馨提示',
          description: '暂无司机接单',
          duration: 6,
        })
        return false
      }
      this.props.dispatch({
        type: 'home/getOrderMapData',
        payload: {
          id: data.id
        }
      }).then(() => {
        let startPoint = new BMap.Point(this.props.orderMapData[0].lng, this.props.orderMapData[0].lat)
        let currentPoint = new BMap.Point(this.props.orderMapData[this.props.orderMapData.length - 1].lng, this.props.orderMapData[this.props.orderMapData.length - 1].lat)
        let endPoint = {}
        map.centerAndZoom(currentPoint, 8)
        map.addOverlay(new BMap.Marker(startPoint, {icon: IconStart}))
        myGeo.getPoint(data.detaileds_address, function (point) {
          if (point) {
            endPoint = point
            map.addOverlay(new BMap.Marker(point, {icon: IconEnd}));
            transitC_E.search(currentPoint, endPoint)
            transitS_E.search(startPoint, endPoint)
          } else {
            alert("终点地址没有解析到结果!")
          }
        }, data.delivery_city)
        let lineData = this.serializationPoint(this.props.orderMapData)
        let polygon = new BMap.Polyline(lineData, {strokeColor: "#5186F4", strokeWeight: 5, strokeOpacity: 1})
        map.addOverlay(polygon)
        transitS_C.search(startPoint, currentPoint)
      })
    } else {
      data = this.props.currentLogistics
      if (data === 0) {
        notification.error({
          message: '温馨提示',
          description: '暂无司机接单',
          duration: 6,
        })
        return false
      }
      this.props.dispatch({
        type: 'home/getLogMapData',
        payload: {
          id: data.id
        }
      }).then(() => {
        let startPoint = new BMap.Point(this.props.logMapData[0].lng, this.props.logMapData[0].lat)
        let currentPoint = new BMap.Point(this.props.logMapData[this.props.logMapData.length - 1].lng, this.props.logMapData[this.props.logMapData.length - 1].lat)
        let endPoint = {}
        map.centerAndZoom(currentPoint, 8)
        map.addOverlay(new BMap.Marker(startPoint, {icon: IconStart}))
        myGeo.getPoint(data.detaileds_address, function (point) {
          if (point) {
            endPoint = point
            map.addOverlay(new BMap.Marker(point, {icon: IconEnd}));
            transitC_E.search(currentPoint, endPoint)
            transitS_E.search(startPoint, endPoint)
          } else {
            alert("终点地址没有解析到结果!")
          }
        }, data.delivery_city)
        let lineData = this.serializationPoint(this.props.logMapData)
        let polygon = new BMap.Polyline(lineData, {strokeColor: "#5186F4", strokeWeight: 5, strokeOpacity: 1})
        map.addOverlay(polygon)
        transitS_C.search(startPoint, currentPoint)
      })
    }
  }

  setAlreadyDriven = (results) => {
    let plan = results.getPlan(0)
    this.setState({
      alreadyDriven: plan.getDistance(true),
    })
  }

  setStillNeedTime = (results) => {
    let plan = results.getPlan(0)
    let currentPoint = new BMap.Point(this.props.orderMapData[this.props.orderMapData.length - 1].lng, this.props.orderMapData[this.props.orderMapData.length - 1].lat)
    let beforePoint = new BMap.Point(this.props.orderMapData[this.props.orderMapData.length - 2].lng, this.props.orderMapData[this.props.orderMapData.length - 2].lat)
    let arrPois = []
    for (let j = 0; j < plan.getNumRoutes(); j++) {
      let route = plan.getRoute(j)
      arrPois = arrPois.concat(route.getPath())
    }
    this.state.map.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#111'}))
    this.state.map.setViewport(arrPois)
    this.setState({
      stillNeedTime: plan.getDuration(true),
    })
    console.log([beforePoint, currentPoint])
    let IconCar = new BMap.Icon(require('../../../assets/image/che.svg'), new BMap.Size(36, 16))
    let lushu = new BMapLib.LuShu(this.state.map, [beforePoint, currentPoint], {
      defaultContent: "",
      autoView: true,
      icon: IconCar,
      speed: 4500,
      enableRotation: true,
      landmarkPois: [
        {lng: 116.314782, lat: 39.913508, html: '加油站', pauseTime: 2},
        {
          lng: 116.315391,
          lat: 39.964429,
          html: '高速公路收费<div><img src="http://map.baidu.com/img/logo-map.gif"/></div>',
          pauseTime: 3
        },
        {
          lng: 116.381476,
          lat: 39.974073,
          html: '肯德基早餐<div><img src="http://ishouji.baidu.com/resource/images/map/show_pic04.gif"/></div>',
          pauseTime: 2
        }
      ]
    })
    lushu.start()
  }

  setTotalDistance = (results) => {
    let plan = results.getPlan(0)
    this.setState({
      totalDistance: plan.getDistance(true),
    })
  }

  hideMap = () => {
    this.props.dispatch({
      type: 'logisticsDetail/save',
      payload: {
        showMap: false
      }
    })
    this.props.dispatch({
      type: 'orderDetail/save',
      payload: {
        showMap: false
      }
    })
  }

  serializationPoint = (data) => {
    let arr = []
    for (let i = 0; i < data.length; i++) {
      arr.push(new BMap.Point(data[i].lng, data[i].lat))
    }
    return arr
  }

  getData = () => {
    if (this.props.location.pathname.indexOf('/order') === 0) {
      return this.props.currentOrder
    } else {
      return this.props.currentLogistics
    }
  }

  render() {
    const currentLogistics = this.getData()
    const char = this.props.location.pathname.indexOf('/order') === 0 ? '订' : '运'
    return (
      <Card bodyStyle={{transition: 'all 0.5s', padding: 0}}
            style={{borderColor: '#e8e8e8', marginBottom: 10}}
            title={<div style={{color: '#545F76', cursor: 'pointer', fontWeight: 600}} onClick={this.hideMap}>
              <Icon type="left" theme="outliwned"/>&nbsp;&nbsp;返回{char}单详情</div>}
            extra={<div><span
              style={{color: '#545F76', fontSize: 15}}>运单编号：{currentLogistics.deliver_code}</span><span
              style={{fontSize: 15, paddingLeft: 50, color: '#aaa'}}>创建时间：{currentLogistics.create_time}</span>
            </div>}>
        <MapDetail currentLogistics={currentLogistics}
                   alreadyDriven={this.state.alreadyDriven}
                   stillNeedTime={this.state.stillNeedTime}
                   totalDistance={this.state.totalDistance}/>
        <div className="mapContainer" id="mapContainer"></div>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  const {currentLogistics, currentOrder, orderMapData, logMapData} = state.home
  return {
    currentLogistics,
    currentOrder,
    orderMapData,
    logMapData,
    loading: state.loading.models.logisticsDetail
  }
}

export default connect(mapStateToProps)(withRouter(LogisticsMap))
