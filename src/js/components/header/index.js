import React from 'react';
import assets from './../../assets';
import '../../../css/components/header.css';

const Header = () => {
  return (
    <header className="header_lesson">
          <div className="container">
              <div className="item-header-first">
                  <a className="back-mycourse" href="#">
                      <i className="icon-back-mycourse"></i>
                  </a>
                  <a href="/" className="logo col-lg-2 col-md-2">
                      <img src={assets.icons.logo} alt="Kyna.vn" className="img-fluid"/>
                  </a>
              </div>
              <div className="item-header-second hidden-sm-down">
                  <h4 className="title-course">Tiếng Anh giao tiếp nơi công sở nâng cao</h4>
              </div>
              <div className="account dropdown wrap">
                  <a href="#" className="dropdown-toggle">
                      <div className="sub-wrap">
                          <img alt="user-avt" src={assets.icons.default_avatar} className="img-responsive"/>
                          <div className="text">
                              <span className="user">Trọng Huân</span>
                              <span className="title">Khóa học của tôi</span>
                          </div>
                      </div>
                  </a>
              </div>
          </div>

      </header>
  );
}

export default Header;
