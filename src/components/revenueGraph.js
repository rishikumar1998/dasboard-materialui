import React, { Component } from 'react'

export default class revenueGraph extends Component {
    render() {
        return (
             <div className="col-lg-8 card_height_100">
  <div className="white_card mb_20">
      <div className="box_header_revene m-0">
        <div className="main-title">
          <h3 className="m-0">Revenue</h3>
        </div>
        <div className="float-lg-right float-none sales_renew_btns justify-content-end">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">This Week</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Last Week</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/">Last Month</a>
            </li>
          </ul>
        </div>
      </div>
    <div className="white_card_body" style={{height: 286}}><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
      <canvas id="bar" width={617} height={251} style={{display: 'block', width: 617, height: 251}} className="chartjs-render-monitor" />
    </div>
  </div>
 
</div>
        )
    }
}
