import React, { Component } from 'react'
import NewsDropdown from './newsDropFiltter'

export default class newsUpdate extends Component {
    render() {
        return (
           <div>
  <div className="white_card card_height_100  mb_20">
    <div className="white_card_header">
      <div className="box_header m-0">
        <div className="main-title">
          <h3 className="m-0">News &amp; Update</h3>
        </div>
        <div className="single_wrap_input">
          {/* <select className="nice_Select2 wide" name id style={{display: 'none'}}>
            <option value={1}>Today</option>
            <option value={1}>Tomorrow</option>
            <option value={1}>Yesterday</option>
          </select><div className="nice-select nice_Select2 wide" tabIndex={0}>
              <span className="current">Tomorrow</span><div className="nice-select-search-box">
                  <input type="text" className="nice-select-search" placeholder="Search..." /></div>
                  <ul className="list"><li data-value={1} className="option focus">Today</li>
                  <li data-value={1} className="option selected">Tomorrow</li>
                  <li data-value={1} className="option">Yesterday</li></ul></div> */}
                  <NewsDropdown/>
        </div>
      </div>
    </div>
    <div className="white_card_body">
      <div className="single_update_news">
        <h5 className="byer_name  f_s_16 f_w_600 color_theme2">36% off For pixel lights Couslations Types.</h5>
        <p className="color_gray f_s_12 f_w_700 ">Sorem Kpsum is simply of the printing..</p>
      </div>
      <div className="single_update_news">
        <h5 className="byer_name  f_s_16 f_w_600 color_theme2">We are produce are new are product this</h5>
        <p className="color_gray f_s_12 f_w_700 ">Gorem Rpsum is simply  text of the printing...</p>
      </div>
      {/* <div className="single_update_news">
        <h5 className="byer_name  f_s_16 f_w_600 color_theme2">50% off For COVID Couslations Types.</h5>
        <p className="color_gray f_s_12 f_w_700 ">EoremHpsum is simply dummy...</p>
      </div> */}
      <div className="load_more_button text-center mt_30">
        <a className="theme_text_btn d-flex align-items-center justify-content-center" href="#">Load more <i className="ti-angle-down f_s_12 ml-2" /> </a>
      </div>
    </div>
  </div> 
</div>

        )
    }
}
