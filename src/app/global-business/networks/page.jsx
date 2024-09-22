'use client';

export default function business(){

  const partnersLs = Array.from({length:27}, (_, i) => i + 1);

  return(
    <div>

      <div className="sp-content bg--lg5 pb--0">

        <div className="sp-content-head">
          <div className="container">
            <h3 className="sp-section-title">
              <span className="title-tag">글로벌 네트워크</span>
              global networks
            </h3>
          </div>
        </div>
        <section className="sp-section pt--0">
          <div className="container">
            <div className="networks-map-content">
              <h4 className="sp-section-title-sml">수출현황</h4>
              <div className="content overflow-m">
                <img src="http://web.rgbcom.kr/BUSUNG/assets/images/global-business/networks-map.png?ver=1" alt="" className="networks-map" />
              </div>
            </div>
          </div>
        </section>

        <section className="sp-section bg--white">
          <div className="container">
            <div className="networks-partners-content">
              <h4 className="sp-section-title-sml">주요 고객사</h4>
              <div className="content">
                {partnersLs.map(i => (
                  <img 
                  key = {i}
                  src={`http://web.rgbcom.kr/BUSUNG/assets/images/global-business/networks-partner-img-${i}.png`} 
                  alt="" 
                  className="networks-partner-img" />
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}