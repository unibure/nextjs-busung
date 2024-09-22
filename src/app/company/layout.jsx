'use client';
import Link from 'next/link';;
import { useSelectedLayoutSegment} from 'next/navigation';

// 추가사항들 //

// 메인페이지, 서브페이지 각각 존재하는 클래스 만들기


export default function IntroHero ({children}){
  const currentSegment = useSelectedLayoutSegment(); // 현재 활성화된 경로의 마지막 세그먼트 반환

  console.log(currentSegment);

  return (
    <div>
      <div className="intro-hero">
        <img src="/images/company-intro-bg.png" alt="" className="intro-bg" />
        <div className="intro-hero-container container">
          <div className="content">
            <h2 className="intro-hero-sbj fw--500 tt--u">company</h2>
            <p className="intro-hero-desc ta--c">
              부성에버텍은 30년의 생산 노하우와 끊임없는 연구 개발을 통해 고객의 요구에 충족되는 <br />
              우수한 품질의 제품과 서비스를 제공하겠습니다.</p>
          </div>
        </div>
      </div>
      <div className="sticky-lnb-container">
  
        <nav className="lnb-bar" id="lnb">
          <div className="container-wide">
            
            <div className="lnb-bar-dropdown">
              <Link href="/company" className="cur">
                <span className="val">COMPANY</span>
                <span className="icon"><i className="arrow down"></i></span>
              </Link>
              <ul className="drop">
                <li className=""><Link href="company/overview">company</Link></li>
                <li className=""><Link href="/" className="">product</Link></li>
                <li className=""><Link href="/global-business/networks" className="">global business</Link></li>
                <li className=""><Link href="/"className="">esg-management</Link></li>
                <li className=""><Link href="/"className="">customer</Link></li>        
              </ul>
              </div>
              <div className="lnb-ls">
                <Link href="/company/overview" className={`${currentSegment === 'overview' ? 'active' :''} lnb_bar__button`}>회사소개</Link>
                <Link href="/" className="lnb_bar__button  ">CI 소개</Link>
                <Link href="/" className="lnb_bar__button  ">회사연혁</Link>
                <Link href="/company/certification" className={`${currentSegment === 'certification' ? 'active' :''} lnb_bar__button`}>인증서</Link>
                <Link href="/" className="lnb_bar__button  ">조직도</Link>
                <Link href="/" className="lnb_bar__button  ">오시는 길</Link>          
              </div>
          </div>
        </nav>
      </div>
      {children}
    </div>
  )
}