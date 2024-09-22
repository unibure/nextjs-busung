import React from 'react';
import Link from 'next/link';

export default function Footer(){
  return(
    <section className="footer">
      <div className="footer__bar">
          <div className="container">
              <nav className="footer_nav">
                  <Link href="/company/overview" className="btn">회사소개</Link>
                  <Link href="/" className="btn">제품소개</Link>
                  <Link href="/global-business/networks" className="btn">글로벌 비즈니스</Link>
                  <Link href="/" className="btn">ESG 경영</Link>
                  <Link href="/" className="btn">고객지원</Link>
              </nav>
              <button className="top_btn" id="top-button">
                  <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21.759" height="13" viewBox="0 0 21.759 13">
                          <path id="패스_198" data-name="패스 198" d="M0,19.638,9.819,9.819,7.364,7.364,0,0" transform="translate(1.061 11.94) rotate(-90)" fill="none" stroke="#fff" strokeWidth="3"></path>
                      </svg>
                  </span>
              </button>
          </div>
      </div>
      <div className="container">
          <div className="footer_cont">
              <div className="address_cont">
                  <h4 className="sbj">부성에버텍(주)</h4>
                  <div className="address">
                      <span className="addr"><b className="fc-primary">본사&nbsp;</b> 경기도 화성시 남양읍 신남안길 7-32 </span>
                      <span className="addr"><b className="fc-primary">2공장 ·기술연구소&nbsp;</b> 경기도 화성시 남양읍 신남안길 7-26 </span>
                      <span className="contact"><b className="fc-primary">TEL&nbsp;</b> 031-353-4635, 4663 <br />   <b className="fc-primary">FAX&nbsp;</b> 070-5133-9599 <br />  <b className="fc-primary">E-mail&nbsp;</b> bse@busungi.com</span>
                  </div>
                  <span className="copy">Copyright 부성에버텍(주) All Rights Reserved.</span>
              </div>
              <div className="inquiry_cont">
                  <h3 className="logo_text">BUSUNG <br /> EVERTECH</h3>
                  <div className="inquiry">
                      <span className="sbj">제품문의</span>
                      <a className="tel" href="tel:+82-31-353-4635">031-353-4635</a>
                      <span className="hours">평일 : 07:40 - 16:30 / 점심 : 11:40 - 12:35 <br /> 휴무 : 주말, 공휴일</span>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}