import React from 'react'
var Highcharts = require('highcharts')

// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts)

class Charts extends React.Component{
  constructor (props) {
    super(props);
    this.state={

    }
  }
   artUpdate() {
    let {payList} = this.props
    console.log(payList)
    var data=[{
      name: 'eat',
      y: 0
    }, {
      name: 'shopping',
      y: 0
    }, {
      name: 'travel',
      y: 0
    }, {
      name: 'game',
      y: 0
    }, {
      name: 'else',
      y: 0
    }]
    for (let i = 0; i < payList.length; i++){
      switch (payList[i].payType) {
        case 'eat':data[0].y+=payList[i].payMoney * 1
          break
        case 'shopping': data[1].y+=payList[i].payMoney  * 1
          break
        case 'travel': data[2].y+=payList[i].payMoney  * 1
          break
        case 'game': data[3].y+=payList[i].payMoney  * 1
          break
        case 'else': data[4].y+=payList[i].payMoney  * 1
          break
        default :console.log('..')
      }
    }
    Highcharts.chart(this.refs.alarmHighChart, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: '2019年5月您的消费占比'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      credits: {

        enabled:false

      },
      exporting: {

        enabled:false

      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data
      }]
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.artUpdate()
  }
  componentDidMount(){
    this.artUpdate()
  }


  render() {

    return (
      <div ref="alarmHighChart">
      </div>
    );
  }
}

export default Charts
