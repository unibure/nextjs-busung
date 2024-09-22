'use client'

export default function Company(){
  return (
    <div>
      <div className="sp-content pb--0">

        <section className="sp-section greeting pt--0">
          <div className="sp-section-head">
            <div className="container">
              <h3 className="sp-section-title">
                <span className="title-tag">인사말</span>
                greeting
              </h3>
            </div>
          </div>
          <div className="sp-section-body">
            <div className="container">
              <div className="greeting-content">
                <div className="thumb"><img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/company-img.png?ver=1" alt="" /></div>
                <div className="content">
                  <p className="desc">
                  <strong className="fw--600 fc--black">"고객과 우리의 제품과 서비스에 진실하고 겸손한 마음으로 정성과 최선을 다한다"</strong> 라는 기업이념으로  <br />
                    저희 부성에버텍은 1990년에 설립하여 최고의 품질, 최상의 서비스를 목표로 고객만족에 최선을 다하며 <br />
                    자동차 부품용 PAD, 흡음재, 보호필름, 전기차 배터리용 PAD 등을 생산 및 공급하며 제조업 분야의 <br />
                    30년 넘는 업력으로 꾸준히 성장하고 있습니다. <br /><br />
                    원칙과 기본에 충실하며 신뢰를 바탕으로 새로운 도약과 기술개발로 경쟁력을 확보하고 사회적 책임을 <br />
                    다하려는 강소기업 부성에버텍(주)입니다.  <br /><br />
                    그동안 변함없이 성원해 주시는 고객사와 협력사, 그리고 많은 분들에게 진심으로 감사드리며 <br />
                    앞으로도 고객만족을 최우선으로 지속성장 할 수 있도록 정성과 최선을 다할 것을 약속드립니다.  <br /><br />
                    감사합니다.
                  </p>
                  <div className="bot-sign">
                    <img src="http://web.rgbcom.kr/BUSUNG/assets/images/common/logo-color.svg" alt="busung-logo" className="company-logo" />
                    <div className="sign">부성에버텍(주) 대표이사 &nbsp; <span>윤  &nbsp; 성  &nbsp;  순</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sp-section overview">
          <div className="sp-section-head">
            <div className="container">
              <h3 className="sp-section-title">
                <span className="title-tag">회사개요</span>
                overview
              </h3>
            </div>
          </div>
          <div className="sp-section-body">
            <div className="container">
              <div className="overview-content">
                <div className="top-wrap">
                  <p className="desc">부성에버텍은 꾸준히 신뢰받는 기업이 되기 위하여  <br />
                  <b>고객의 요구에 충족되는 우수한 품질의 제품과 서비스를</b>  <br />
                  제공하겠습니다.
                  </p>
                  <ul className="certi-icon">
                    <li className="item">
                      <div className="inner">
                        <span>IATF</span>
                        <small>16949</small>
                      </div>
                    </li>
                    <li className="item">
                      <div className="inner">
                        <span>ISO</span>
                        <small>14001</small>
                      </div>
                    </li>
                    <li className="item">
                      <div className="inner">
                        <span>경기도 <br />유망중소기업</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bot-wrap">

                  <div className="vision-diagram">
                    <div className="content philosophy">
                      <div className="sbj">
                        <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-diagram.svg" alt="" className="diagram-svg" />
                        <span className="txt">기업이념</span>
                      </div>
                      <p className="desc">고객과 우리의 제품과 서비스에 <br /> <b>진실하고 겸손한 마음으로 <br /> 정성과 최선을 다한다.</b></p>
                      <div className="line"><div className="circle"></div></div>
                    </div>
                    <div className="diagram-logo">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-diagram-logo.svg" alt="" />
                      <div className="line"><div className="circle"></div></div>
                    </div>
                    <div className="content vision">
                      <div className="line"><div className="circle"></div></div>
                      <div className="sbj">
                        <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-diagram.svg" alt="" className="diagram-svg" />
                        <span className="txt">VISION</span>
                      </div>
                      <p className="desc">ESG 경영으로 <br />구성원과 함께 지속가능한 <br /><b>BUSUNG EVERTECH</b></p>
                    </div>
                  </div>

                  <ul className="ls">
                    <li className="item">
                      <div className="line"></div>
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-icon-1.svg" alt="" className="ov-icon" />
                      <span className="sbj">know-how</span>
                      <p className="desc">30년의 노하우로 신뢰받는 제품을 <br />생산하여 최상의 서비스를 제공합니다.</p>
                    </li>
                    <li className="item">
                      <div className="line"></div>
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-icon-2.svg" alt="" className="ov-icon tag" />
                      <span className="sbj">customized <br />service</span>
                      <p className="desc">생산부터 납품까지 원스탑 맞춤형 <br />서비스를 제공하고 있습니다.</p>
                    </li>
                    <li className="item">
                      <div className="line"></div>
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-icon-3.svg" alt="" className="ov-icon" />
                      <span className="sbj">Customer-<br />oriented</span>
                      <p className="desc">항상 진실하고 겸손하게 고객중심의 <br />시스템을 운영하고 있습니다. </p>
                    </li>
                    <li className="item">
                      <div className="line"></div>
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/company/overview-icon-4.svg" alt="" className="ov-icon" />
                      <span className="sbj">highest <br />quality</span>
                      <p className="desc">끊임없는 연구와 개발로 최고 품질의 제품을 <br />제공하기 위해 최선을 다하고 있습니다.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}