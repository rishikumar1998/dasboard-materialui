import React, { Component } from 'react'
import ChartDrop from './chartDrop'

export default class dailySales extends Component {
    render() {
        return (
          <div>
  <div className="white_card card_height_100 mb_20">
    <div className="white_card_header">
      <div className="box_header m-0">
        <div className="main-title">
          <h3 className="m-0">Summery</h3>
        </div>
        <div className="header_more_tool">
          <ChartDrop />
          </div>
      </div>
    </div>
    <div className="white_card_body mt_30">
      <div id="bar1" className="barfiller">
        <div className="tipWrap" style={{display: 'inline'}}>
          <span className="tip" style={{left: '43.2265px', transition: 'left 2s ease-in-out 0s'}}>25%</span>
        </div>
        <span className="fill" data-percentage={25} style={{background: 'rgb(255, 191, 67)', width: '66.664px', transition: 'width 2s ease-in-out 0s'}} />
      </div>
      <div id="bar2" className="barfiller">
        <div className="tipWrap" style={{display: 'inline'}}>
          <span className="tip" style={{left: '176.555px', transition: 'left 2.1s ease-in-out 0s'}}>75%</span>
        </div>
        <span className="fill" data-percentage={75} style={{background: 'rgb(80, 143, 244)', width: '199.992px', transition: 'width 2.1s ease-in-out 0s'}} />
      </div>
      <div id="bar3" className="barfiller mb-0">
        <div className="tipWrap" style={{display: 'inline'}}>
          <span className="tip" style={{left: '67.2255px', transition: 'left 2.2s ease-in-out 0s'}}>34%</span>
        </div>
        <span className="fill" data-percentage={34} style={{background: 'rgb(75, 230, 157)', width: '90.663px', transition: 'width 2.2s ease-in-out 0s'}} />
      </div>
    </div>
  </div>
</div>


        )
    }
}


