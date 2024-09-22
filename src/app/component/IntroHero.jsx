'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment , usePathname } from 'next/navigation';;


export default function IntroHero ({children, title, desc, depth2 }){
  const currentSegment = useSelectedLayoutSegment();
  const path = usePathname();
  const currentPath = path.split('/')[1];

  const depth1 = [
    { href: '/company/overview', label: '회사소개', path: 'company', segment: 'overview' },
    { href: '/', label: '제품소개', path: '', segment: '' },
    { href: '/global-business/networks', label: '글로벌 비즈니스', path: 'global-business', segment: 'networks' },
    { href: '/', label: 'ESG 경영', path: '', segment: '' },
    { href: '/', label: '고객지원', path: '', segment: '' },
  ];

  return (
    <div>
      <div className="intro-hero">
        <img src="/images/company-intro-bg.png" alt="" className="intro-bg" />
        <div className="intro-hero-container container">
          <div className="content">
            <h2 className="intro-hero-sbj fw--500 tt--u">{title}</h2>
            <p className="intro-hero-desc ta--c">
              {desc}
            </p>
          </div>
        </div>
      </div>

      <div className="sticky-lnb-container">
        <nav className="lnb-bar" id="lnb">
          <div className="container-wide">
            <div className="lnb-bar-dropdown">
              <Link href={`/${currentPath}`} className="cur">
                <span className="val">{title.toUpperCase()}</span>
                <span className="icon"><i className="arrow down"></i></span>
              </Link>
              <ul className="drop">
                {/* 즉 React는 return에서 user.map(...)을 반복실행할 때 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다. */}
                {depth1 && depth1.map((link, index) => (
                  <li key={index} className={`${currentPath === link.path ? 'active' : ''}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))
                }
              </ul>
            </div>
            <div className="lnb-ls">
              {depth2 && depth2.map((link , index) => (
                <Link key={index} href={link.href} className={`${currentSegment === link.segment ? 'active' : ''} lnb_bar__button`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      
      {children}
    </div>
  )
}
