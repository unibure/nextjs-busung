'use client';

export default function Certification (){
  const certList = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div>
      <div className="sp-content pb--0">

<section className="sp-section pt--0">
  <div className="sp-content-head">
    <div className="container">
      <h3 className="sp-section-title">
        <span className="title-tag">인증서</span>
        certification
      </h3>
      <p className="sp-section-desc"><b>인증받은 기술력</b>으로 더욱 앞서겠습니다.</p>
    </div>
  </div>
  <div className="sp-section-body">
    <div className="container">
      <div className="cert-content">
        <ul className="cert-ls">
          {certList.map((i) => (
            <li className="ls" key={i}>
                <div className="thumb">
                  <img src="http://web.rgbcom.kr/BUSUNG/admin/data/file/cert_ko/thumb-1_copy3_16_da627ea7186c3e643e1a8ec8442cc9ef_I3zNGFK0_3c3f292828bee98c6d993285343a39461ff506a9_287x362.png" alt="" />
                </div>
                  <div className="cont">
                    <span className="cert-num lineclamp--2">ISO 14001-2015</span>
                    <span className="tit lineclamp--2">환경인증서</span>
                  </div>
              </li>
          ))}
        </ul>
        <nav className="paging">
          <a href="/BUSUNG/ko/company/certification.php?page=1#anc1" className="paging__btn paging__controller paging__start disabled"><i className="arrow left"></i><i className="arrow left"></i></a>
          <a href="/BUSUNG/ko/company/certification.php?page=0#anc1" className="paging__btn paging__controller paging__prev disabled"><i className="arrow left"></i></a>
          <ul>
          <li className="paging__btn paging__num active"><a href="/BUSUNG/ko/company/certification.php?page=1#anc1" className="">1</a></li>
          <li className="paging__btn paging__num"><a href="/BUSUNG/ko/company/certification.php?page=2#anc1" className="">2</a></li>
          </ul>
          <a href="/BUSUNG/ko/company/certification.php?page=2#anc1" className="paging__btn paging__controller paging__next"><i className="arrow right"></i></a>
          <a href="/BUSUNG/ko/company/certification.php?page=2#anc1" className="paging__btn paging__controller paging__end"><i className="arrow right"></i><i className="arrow right"></i></a>
        </nav>
      </div>
    </div>
  </div>
</section>

</div>
    </div>
  )
}