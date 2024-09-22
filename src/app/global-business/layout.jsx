'use client';
import Link from 'next/link';
import {useSelectedLayoutSegment} from 'next/navigation';;

// 추가사항들 //

// 메인페이지, 서브페이지 각각 존재하는 클래스 만들기


export default function IntroHero ({children}){
  const currentSegment = useSelectedLayoutSegment();

  return (
    <div>
      <div className="intro-hero">
        <img src="/images/global-intro-bg.png" alt="" className="intro-bg" />
        <div className="intro-hero-container container">
          <div className="content">
            <h2 className="intro-hero-sbj fw--500 tt--u">Glboal Business</h2>
            <p className="intro-hero-desc ta--c">
            부성에버텍은 지속적인 기술 개발을 활용하여 글로벌 기업으로 도약하고 있습니다.</p>
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
                <li className="active"><Link href="company/overview" className="">company</Link></li>
                <li className=""><Link href="/" className="">product</Link></li>
                <li className=""><Link href="/global/business" className="">global business</Link></li>
                <li className=""><Link href="/"className="">esg-management</Link></li>
                <li className=""><Link href="/"className="">customer</Link></li>        
              </ul>
              </div>
              <div className="lnb-ls">
                <Link href="/global/networks" className={`${currentSegment === 'networks' ? 'active' :''} lnb_bar__button`}>글로벌 네트워크</Link>
                <Link href="/global" className="lnb_bar__button  ">2030 사업계획</Link>
              </div>
          </div>
        </nav>
      </div>
      {children}
    </div>
  )
}