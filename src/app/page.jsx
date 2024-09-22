'use client'

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const plusIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <g id="그룹_19060" data-name="그룹 19060" transform="translate(-1562.5 -1293.5)">
      <line id="선_536" data-name="선 536" x2="14" transform="translate(1562.5 1300.5)" fill="none" stroke="#707070" strokeWidth="2"></line>
      <line id="선_537" data-name="선 537" x2="14" transform="translate(1569.5 1293.5) rotate(90)" fill="none" stroke="#707070" strokeWidth="2"></line>
    </g>
  </svg>  
);

const slidesData = [
  {
    videoSrc: '/images/main-visual-1.mp4',
    title: 'SAFE',
    desc: `부성에버텍의 자동차 부품 조립 시 사용되는 차량 내장재는 <br />
           차량내 소음, 이음방지의 역할을 하여  <br />
           안전하고 편안한 운행을 가능하게 합니다.`
  },
  {
    videoSrc: '/images/main-visual-2.mp4',
    title: 'Stable',
    desc: `LCD, LED, Smart Phone 등의 고정 부착, <br />
           빛 샘 방지, 충격흡수 등의 용도로 사용되어 <br />
           제품의 안정감 있는 사용을 보장합니다.`
  },
  {
    videoSrc: '/images/main-visual-3.mp4',
    title: 'Comfortable',
    desc: `뛰어난 복원력, 완충성으로 가전제품, 화장품, 사무기 등  <br />
           충격방지 포장재로 사용되어 일상생활의 제품 포장 및 보관 등에 <br />
           편리하게 적용 할 수 있습니다.`
  }
];

export default function Home() {


  const visualPagi = {
    clickable: true,
    renderBullet: function (index, className){
      const visualname = ['SAFE', 'STABLE', 'COMFORTABLE']
      return `
        <div class="${className} pgai-btn">
          <div class="txt">${visualname[index]}</div>
          <div class="bar">
            <div class="inner"></div>
          </div>
        </div>`;
    }
  }

  const appPagi = {
    clickable : true,
    renderBullet  : function(index , className){
      const appName = [ 'Vehicular', 'electronic', 'Living packaging']
      return `
      <div class="${className}">
        <div class="name">${appName[index]}</div>
        <div class="bar">
          <div class="inner"></div>
        </div>
      </div>`;
    }
  }

  return (
    <main>
      <section className="section visual">
        <Swiper
        className='visual-swiper'
        modules={[Pagination, EffectFade , Autoplay]}
        loop={true}
        effect="fade"
        pagination={visualPagi}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="container">
                  <video src={slide.videoSrc} className='visual-video' autoPlay playsInline loop muted></video>
                  <div className="content">
                    <h2 className="title">{slide.title}</h2>
                    <p className="desc" dangerouslySetInnerHTML={{ __html: slide.desc }}></p>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        
        </Swiper>

      </section>

      <section className="section company">
        <div className="container">
          <div className="head">
            <div className="title-cont">
              <h3 className="section-title">
                <span className="title-sml">BUSUNG EVERTECH</span>
                개발에서 양산까지 정성과 최선을 다해 <br /><b>최적의 서비스를 제공</b>합니다.
              </h3>
            </div>
            <div className="head-link">
              <div className="link-cont">
                <Link href="/company" className='btn'>Comapny 
                  <span className="icon">
                    {plusIcon}
                  </span>
                </Link>
                <Link href="/history" className='btn'>History 
                  <span className="icon">
                    {plusIcon}
                  </span>
                </Link>
              </div>
              <p className="section-desc">부성에버텍은 30년의 생산 노하우와 끊임없는 연구 개발을 통해 <br />고객의 요구에 충족되는 우수한 품질의 제품과 서비스를 제공하겠습니다.</p>
            </div>
          </div>
        </div>

        <div className="body">
          <img src="/images/about-bg.png" alt="" className='comp-back-img' />
          <div className="container">
            <ul className="comp-ls">
              <li className="item">
                <h3 className='sbj'>30</h3>
                <span className="desc">30년의 생산 노하우</span>
              </li>
              <li className="item">
                <h3 className='sbj'>ONE-STOP</h3>
                <span className="desc">원스탑 맞춤형 서비스</span>
              </li>
              <li className="item">
                <h3 className='sbj'>BEST</h3>
                <span className="desc">최고의 품질을 위한 연구 개발</span>
              </li>
            </ul>
          </div>
        </div>
      
      
      </section>

      <section className="section product">
        <div className="container">
          <div className="head">
              <div className="title_section">
                  <span className="title-sml">Product</span>
                  <h3 className="section-title">원칙과 기본에 충실하며 <br /><b>신뢰있는 제품을 생산·공급</b>합니다.</h3>
                  <p className="section-desc">부성에버텍은 다양한 분야에 활용되는  <br />FOAM, PAD, 포장재 등을 생산 및 공급하고 있습니다. </p>
              </div>
              <img src="/images/product-thumb-2.png" alt="" className="prod-thumb" />
          </div>
          <ul className="body">
              <li className="item">
                <Link href="http://web.rgbcom.kr/BUSUNG/ko/product/line-up.php" className="wrap">
                  <div className="text-cont">
                      <span className="cate fw--700">Vehicular</span>
                      <h4 className="sbj">자동차 분야</h4>
                  </div>
                  <img src="/images/product-img-1.png" alt="" className="product-img-1" />
                  <div className="link-go">
                    <span className="txt">View More</span>
                    <span className="icon">         
                      {plusIcon}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="item">
                <Link href="http://web.rgbcom.kr/BUSUNG/ko/product/electronic.php" className="wrap">
                  <div className="text-cont">
                      <span className="cate fw--700">Electronics</span>
                      <h4 className="sbj">전자 분야</h4>
                  </div>
                  <img src="/images/product-img-2.png" alt="" className="" />
                  <div className="link-go">
                    <span className="txt">View More</span>
                    <span className="icon">         
                      {plusIcon}
                    </span>
                  </div>
                  </Link>
              </li>
              <li className="item">
                <Link href="http://web.rgbcom.kr/BUSUNG/ko/product/living-packaging.php" className="wrap">
                  <div className="text-cont">
                      <span className="cate fw--700">Living packaging</span>
                      <h4 className="sbj">생활 포장 분야</h4>
                  </div>
                  <img src="/images/product-img-3.png" alt="" className="" />
                  <div className="link-go">
                    <span className="txt">View More</span>
                    <span className="icon">         
                      {plusIcon}
                    </span>
                  </div>
                  </Link>
              </li>
          </ul> 
        </div>
      </section>

      <section className="mp-section app_field">
        <Swiper
          className='app_field_slide'
          modules={[Pagination, EffectFade , Autoplay]}
          loop={true}
          effect="fade"
          pagination={appPagi}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          > 
            <SwiperSlide className="swiper-slide">
              <div className="slide-thumb">
                <img src="/images/app-field-bg-1.png" alt="" className='app-back-img' />
                <div className="container">
                  <div className="content">
                    <div className="head">
                      <span className="title-sml">Application field</span>
                      <span className="app_tit__sml fw--500">생활 포장 분야</span>
                      <h3 className="app_tit ff--sub1 fc--primary-light tt--u">Living <br />packaging</h3>
                      <p className="app_desc">화장품, 건축 자재 등과 같이 생활에서 발생하는 <br />전반적인 포장용 PAD를 생산 및 공급합니다.</p>
                    </div>
                  </div>
                </div>
              </div>

                <div className="field-float-cont">
                  <div className="item foam-paper">
                    <div className="inner">
                      <div className="plus-btn"><span className="ico--plus"></span></div>
                      <div className="appear-box">
                        <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-living-foam-paper.svg" alt="" />
                        <div className="line"></div>
                        <span className="text">발포지</span>
                      </div>
                    </div>
                  </div>
                  <div className="item material">
                    <div className="inner">
                      <div className="plus-btn"><span className="ico--plus"></span></div>
                      <div className="appear-box">
                        <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-living-material.svg" alt="" />
                        <div className="line"></div>
                        <span className="text">완충재</span>
                      </div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-thumb">
                <img src="/images/app-field-bg-2.png" alt="" className='app-back-img' />
                <div className="container">
                  <div className="content">
                    <div className="head">
                      <span className="title-sml">Application field</span>
                      <span className="app_tit__sml fw--500">자동차 분야</span>
                      <h3 className="app_tit ff--sub1 fc--primary tt--u">Vehicular</h3>
                      <p className="app_desc">자동차 부품 조립 시 사용되는 소음, 이음방지용 PAD,  <br />흡음재, 보호필름, 부직포 생산 및 공급하고 있습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-float-cont">
                <div className="item head-line">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-vehicular-head-line.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">천장</span>
                    </div>
                  </div>
                </div>
                <div className="item sheet-frame">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-vehicular-sheet-frame.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">차량용 시트</span>
                    </div>
                  </div>
                </div>
                <div className="item air-vent">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-vehicular-air-vent.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">내장 인테리어</span>
                    </div>
                  </div>
                </div>
                <div className="item door-trim">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-vehicular-door-trim.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">도어 트림</span>
                    </div>
                  </div>
                </div>
                <div className="item floor">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-vehicular-floor.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">트렁크</span>
                    </div>
                  </div>
                </div>
                <div className="item battery">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-vehicular-battery.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">2차 전지</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-thumb">
                <img src="/images/app-field-bg-3.png" alt="" className='app-back-img' />
                <div className="container">
                  <div className="content">
                    <div className="head">
                      <span className="title-sml">Application field</span>
                      <span className="app_tit__sml fw--500">전자 분야</span>
                      <h3 className="app_tit ff--sub1 fc--primary tt--u">electronic</h3>
                      <p className="app_desc">외부 충격을 흡수 및 완충으로 제품을 보호하고, <br />스마트폰 및 전자부품의 이음, 소음, 누수 등을 방지합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-float-cont">
                <div className="item tape">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-electronic-tape.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">Tape and Poron</span>
                    </div>
                  </div>
                </div>
                <div className="item sponge">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-electronic-sponge.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">Sponge</span>
                    </div>
                  </div>
                </div>
                <div className="item mesh">
                  <div className="inner">
                    <div className="plus-btn"><span className="ico--plus"></span></div>
                    <div className="appear-box">
                      <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/field-electronic-mesh.svg" alt="" />
                      <div className="line"></div>
                      <span className="text">Mesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

        </Swiper>
      </section>

      <section className="mp-section etc">
        <div className="container">
          <div className="head">
              <div className="title">
                  <div className="text_img">
                    <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/mask_text.svg" alt="" className="" />
                  </div>
                  <div className="mask">
                    <img src="http://web.rgbcom.kr/BUSUNG/assets/images/main/mask_bg.png" alt="" className="" />
                  </div>
              </div>
              <p className="desc lh--190">부성에버텍은 고객의 요구에 충족되는 우수한 품질의 제품과 서비스를 제공할 것이며, <br /> 보다 나은 제품을 만들기 위해 최선을 다 할 것을 약속드립니다.</p>
          </div>
          <div className="body">
            <div className="notice_content">
              <div className="notice__head">
                  <h4 className="sbj">New &amp; Notice</h4>
                  <Link href="http://web.rgbcom.kr/BUSUNG/ko/customer/news.php" className="view">News List</Link>
              </div>
              <div className="notice__body">
                <Link className="item" href="http://web.rgbcom.kr/BUSUNG/ko/customer/news-view.php?wr_id=7#anc1">
                  <div className="top">
                      <div className="days">
                        <span className="day">15</span>
                        <span className="year">2024. 09.</span>
                      </div>
                      <span className="icon">
                        {plusIcon}
                      </span>
                  </div>
                  <div className="text_cont">
                    <h5 className="tit lineclamp--1">제60회 무역의날 수출의탑 수상기업...</h5>
                    <div className="desc">
                      <p>한국무역협회가 지난 5일 삼성동 코엑스에서 무역 유공자, 정부·유관기관장 등&nbsp;1200여 명이 참석한 가운데 ‘제60회 무역의 날’ 기념식을 개최했다.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>
                        <img src="http://web.rgbcom.kr/BUSUNG/admin/data/editor/2407/app-field-bg-1.png_2295036830f6857bf2f9fcc182b4a5ff_0mmz.png" width="1920" height="965" />
                      </p>            
                    </div>
                  </div>
                </Link>
                <Link className="item" href="http://web.rgbcom.kr/BUSUNG/ko/customer/news-view.php?wr_id=6#anc1">
                  <div className="top">
                      <div className="days">
                          <span className="day">15</span>
                          <span className="year">2024. 09.</span>
                      </div>
                      <span className="icon">
                          {plusIcon}
                      </span>
                  </div>
                  <div className="text_cont">
                    <h5 className="tit lineclamp--1">제60회 무역의날 수출의탑 수상기업...</h5>
                    <div className="desc">
                      <p>한국무역협회가 지난 5일 삼성동 코엑스에서 무역 유공자, 정부·유관기관장 등&nbsp;1200여 명이 참석한 가운데 ‘제60회 무역의 날’ 기념식을 개최했다.</p>            
                    </div>
                  </div>
                </Link>
                <Link className="item" href="http://web.rgbcom.kr/BUSUNG/ko/customer/news-view.php?wr_id=2#anc1">
                  <div className="top">
                    <div className="days">
                    <span className="day">15</span>
                    <span className="year">2024. 09.</span>
                  </div>
                <span className="icon">
                    {plusIcon}
                </span>
            </div>
              <div className="text_cont">
                <h5 className="tit lineclamp--1">제60회 무역의날 수출의탑 수상기업...</h5>
                <div className="desc">
                  <p>한국무역협회가 지난 5일 삼성동 코엑스에서 무역 유공자, 정부·유관기관장 등&nbsp;1200여 명이 참석한 가운데 ‘제60회 무역의 날’ 기념식을 개최했다.</p>            
                </div>
              </div>
            </Link>
              </div>
            </div>
            <div className="etc_content">
              <div className="cont">
                <img src="/images/etc-global-bg.png" alt=""  className='etc-bg'/>
                <Link href="/global-business/global-networks.php" className='text-box'>
                  <h4 className="sbj">Global Business
                  <span className="sbj__ko">글로벌 비즈니스</span></h4>
                </Link>
              </div>
              <div className="cont">
                <img src="/images/etc-inquiry-bg.png" alt=""  className='etc-bg'/>
                <Link href="http://web.rgbcom.kr/BUSUNG/ko/customer/inquiry.php" className='text-box'>
                  <h4 className="sbj">Online Inquiry 
                  <span className="sbj__ko">온라인 문의</span></h4>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
