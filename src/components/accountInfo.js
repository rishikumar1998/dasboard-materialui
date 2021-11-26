import React, { Component } from 'react'
import ChartDrop from './chartDrop'

export default class accountInfo extends Component {
    render() {
        return (
           <div>
  <div className="white_card card_height_100  mb_20">
    <div className="white_card_header">
      <div className="box_header m-0">
        <div className="main-title">
          <h3 className="m-0">Account Info</h3>
        </div>
        <div className="header_more_tool">
         <ChartDrop/>
        </div>
      </div>
    </div>
    <div className="white_card_body">
      <div className="monthly_plan_wraper">
        <div className="single_plan d-flex align-items-center justify-content-between">
          <h5 className="color_theme2 f_s_14 f_w_700 mb-0">Monthly Plan</h5>
          <span className="color_gray2 f_s_16 f_w_700">$25</span>
        </div>
        <div className="single_plan d-flex align-items-center justify-content-between">
          <h5 className="color_theme2 f_s_14 f_w_700 mb-0">Taxes</h5>
          <span className="color_gray2 f_s_16 f_w_700">$14</span>
        </div>
        <div className="single_plan d-flex align-items-start justify-content-between">
          <div>
            <h5 className="color_theme2 f_s_14 f_w_700 mb-0">Extera</h5>
            <p className="f_s_13 f_w_700">Netflix and other bills in this
              month.</p>
          </div>
          <span className="color_gray2 f_s_16 f_w_700">$25</span>
        </div>
        <div className="total_blance mt_20 mb_10">
          <span className="f_s_13 f_w_700 color_gray ">Total balance</span>
          <div className="total_blance_inner d-flex align-items-center flex-wrap justify-content-between">
            <div>
              <span className="f_s_40 f_w_700 color_text_3 d-block">$3650</span>
              <a className="badge_btn_5" href="/">+1235</a>
            </div>
            <div>
              <div><a className="badge_btn_6 mb_15" href="/">Today</a></div>
              <div><a className="badge_btn_7" href="/">This week</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
