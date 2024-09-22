'use client';

// 스크롤시 헤더 css 조정

import { useEffect , useState } from 'react';
import { usePathname } from 'next/navigation';
import { Orbitron , Teko } from "next/font/google";
import localFont from 'next/font/local';
import Link from 'next/link';
import "./default.css";
import "./globals.css";


const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: '--ff-primary',
});

const orbitron = Orbitron({
  styles: ["normal"],
  subsets: ["latin"],
  variable: '--ff-secondary',
});

const teko = Teko({
  styles: ["normal"],
  subsets: ["latin"],
  variable: '--ff-tertiary'
})

const logo = (
  <svg width="112.073" height="29.508" viewBox="0 0 112.073 29.508">
    <defs>
      <clipPath id="clipPath">
        <rect id="사각형_9883" data-name="사각형 9883" width="112.073" height="29.508" fill="#fff"></rect>
      </clipPath>
    </defs>
    <g id="그룹_19306" data-name="그룹 19306" transform="translate(0 0)">
      <g id="그룹_19260" data-name="그룹 19260" transform="translate(0 0)" clipPath="url(#clipPath)">
        <path d="M96.784,15.089a2.336,2.336,0,0,0,1.06-2.039,2.492,2.492,0,0,0-.44-1.492,2.755,2.755,0,0,0-1.232-.936c-.063-.026-.133-.046-.2-.068a2.713,2.713,0,0,0,.97-.826,2.31,2.31,0,0,0,.41-1.362,2.269,2.269,0,0,0-.98-1.91A4.969,4.969,0,0,0,93.4,5.727H88.244v10.09h5.448a5.455,5.455,0,0,0,3.092-.728m-5.715-7.3h1.96a1.976,1.976,0,0,1,1.081.238.811.811,0,0,1,.36.727.831.831,0,0,1-.36.736,1.937,1.937,0,0,1-1.081.245H91.07Zm0,5.968V11.709h2.393a2.034,2.034,0,0,1,1.117.252.969.969,0,0,1,0,1.542,2.034,2.034,0,0,1-1.117.252Z" transform="translate(-52.67 -3.418)" fill="#fff"></path>
        <path d="M125.009,5.728H122.2v5.506a2.761,2.761,0,0,1-.5,1.859,1.781,1.781,0,0,1-1.4.562,1.8,1.8,0,0,1-1.406-.562,2.731,2.731,0,0,1-.512-1.859V5.728h-2.854v5.593a4.635,4.635,0,0,0,1.254,3.474,5.578,5.578,0,0,0,6.976,0,4.637,4.637,0,0,0,1.254-3.474Z" transform="translate(-68.953 -3.419)" fill="#fff"></path>
        <path d="M150.314,14.084a2.851,2.851,0,0,0,.5-1.621,2.564,2.564,0,0,0-.31-1.319,2.514,2.514,0,0,0-.814-.85,4.681,4.681,0,0,0-1.117-.519q-.613-.195-1.225-.325T146.22,9.2a2.773,2.773,0,0,1-.822-.317.6.6,0,0,1-.31-.526.727.727,0,0,1,.158-.461,1.084,1.084,0,0,1,.519-.325,3.046,3.046,0,0,1,.951-.122,5.142,5.142,0,0,1,1.369.194,6.842,6.842,0,0,1,1.427.584l.879-2.119a6.25,6.25,0,0,0-1.708-.656,8.588,8.588,0,0,0-1.953-.223,6.05,6.05,0,0,0-2.479.447,3.444,3.444,0,0,0-1.492,1.182,2.87,2.87,0,0,0-.5,1.644,2.415,2.415,0,0,0,1.138,2.183,4.861,4.861,0,0,0,1.117.526,11.7,11.7,0,0,0,1.225.331q.613.129,1.117.259a2.876,2.876,0,0,1,.822.332.621.621,0,0,1,.317.547.607.607,0,0,1-.166.425,1.151,1.151,0,0,1-.526.288,3.408,3.408,0,0,1-.951.108,5.809,5.809,0,0,1-1.766-.281,6.589,6.589,0,0,1-1.564-.714l-.936,2.1a6.175,6.175,0,0,0,1.867.8,9.086,9.086,0,0,0,2.385.31,6.043,6.043,0,0,0,2.487-.447,3.424,3.424,0,0,0,1.484-1.189" transform="translate(-84.809 -3.12)" fill="#fff"></path>
        <path d="M171.5,16.02a4.782,4.782,0,0,0,3.488-1.225,4.637,4.637,0,0,0,1.254-3.474V5.728h-2.811v5.506a2.76,2.76,0,0,1-.5,1.86,1.781,1.781,0,0,1-1.4.562,1.8,1.8,0,0,1-1.405-.562,2.733,2.733,0,0,1-.512-1.86V5.728H166.76V11.32a4.637,4.637,0,0,0,1.254,3.474A4.782,4.782,0,0,0,171.5,16.02" transform="translate(-99.533 -3.419)" fill="#fff"></path>
        <path d="M197.875,10.44l4.454,5.377h2.349V5.728h-2.8V11.1l-4.454-5.377h-2.349v10.09h2.8Z" transform="translate(-116.436 -3.419)" fill="#fff"></path>
        <path d="M228.173,15.72a7.974,7.974,0,0,0,2.234-.332,6.552,6.552,0,0,0,2-.951V10.257h-2.522v2.768a3.221,3.221,0,0,1-.3.123,3.781,3.781,0,0,1-1.24.208,3.121,3.121,0,0,1-1.16-.208,2.577,2.577,0,0,1-.9-.591,2.683,2.683,0,0,1-.584-.915,3.429,3.429,0,0,1,0-2.357,2.7,2.7,0,0,1,.584-.908,2.493,2.493,0,0,1,.908-.584,3.321,3.321,0,0,1,1.182-.2,3.1,3.1,0,0,1,1.333.281,3.622,3.622,0,0,1,1.117.843l1.816-1.644A4.775,4.775,0,0,0,230.782,5.7a6.967,6.967,0,0,0-4.807-.094,5.194,5.194,0,0,0-1.78,1.088,5.015,5.015,0,0,0-1.167,1.665,5.222,5.222,0,0,0-.418,2.111,5.218,5.218,0,0,0,.418,2.112,5.058,5.058,0,0,0,1.16,1.665,5.122,5.122,0,0,0,1.766,1.088,6.3,6.3,0,0,0,2.22.382" transform="translate(-132.868 -3.119)" fill="#fff"></path>
        <path d="M89.054,45.361h5.059V44.136H89.054v-3.1h5.679V39.783h-7.12v10.09h7.322V48.619H89.054Z" transform="translate(-52.293 -23.745)" fill="#fff"></path>
        <path d="M112.611,48.078l-3.634-8.295H107.42l4.44,10.09h1.427l4.425-10.09H116.27Z" transform="translate(-64.115 -23.745)" fill="#fff"></path>
        <path d="M137.573,45.361h5.059V44.136h-5.059v-3.1h5.679V39.783h-7.12v10.09h7.322V48.619h-5.881Z" transform="translate(-81.252 -23.745)" fill="#fff"></path>
        <path d="M166.284,46.384a3.218,3.218,0,0,0,1.441-1.2,3.409,3.409,0,0,0,.5-1.881,3.444,3.444,0,0,0-.5-1.888,3.208,3.208,0,0,0-1.441-1.211,5.538,5.538,0,0,0-2.263-.418h-3.935v10.09h1.442V46.8h2.493q.333,0,.641-.026l2.17,3.1H168.4L166,46.488c.094-.034.191-.065.28-.1m-2.306-.807h-2.45v-4.54h2.45a3.218,3.218,0,0,1,2.1.591,2.049,2.049,0,0,1,.714,1.672,2.07,2.07,0,0,1-.714,1.679,3.19,3.19,0,0,1-2.1.6" transform="translate(-95.55 -23.745)" fill="#fff"></path>
        <path d="M182.111,41.037h3.459v8.836H187V41.037h3.459V39.784h-8.346Z" transform="translate(-108.696 -23.745)" fill="#fff"></path>
        <path d="M208.151,45.361h5.059V44.136h-5.059v-3.1h5.679V39.783h-7.12v10.09h7.322V48.619h-5.881Z" transform="translate(-123.378 -23.745)" fill="#fff"></path>
        <path d="M231.158,41.875a3.783,3.783,0,0,1,1.261-.807A4.247,4.247,0,0,1,234,40.78a4.036,4.036,0,0,1,1.542.3,3.749,3.749,0,0,1,1.3.9l.937-.908a4.418,4.418,0,0,0-1.679-1.175,6.078,6.078,0,0,0-4.281-.015A5.018,5.018,0,0,0,229,42.6a5.466,5.466,0,0,0,0,4.122,5.072,5.072,0,0,0,1.117,1.636,4.971,4.971,0,0,0,1.686,1.081,5.766,5.766,0,0,0,2.126.382,5.677,5.677,0,0,0,2.169-.4,4.484,4.484,0,0,0,1.679-1.182l-.937-.908a3.655,3.655,0,0,1-1.3.915,4.021,4.021,0,0,1-1.542.3,4.247,4.247,0,0,1-1.579-.288,3.783,3.783,0,0,1-1.261-.807,3.638,3.638,0,0,1-.829-1.232,4.21,4.21,0,0,1,0-3.1,3.638,3.638,0,0,1,.829-1.232" transform="translate(-136.439 -23.574)" fill="#fff"></path>
        <path d="M263.716,39.783v4.339h-5.794V39.783H256.48v10.09h1.442v-4.5h5.794v4.5h1.441V39.783Z" transform="translate(-153.084 -23.745)" fill="#fff"></path>
        <path d="M26.719,14.183l-.067-.042.056-.057A8.279,8.279,0,0,0,20.8,0H11.783l-4,10.084H20.055a1.831,1.831,0,0,0,0-3.663H13.177l1.094-2.758H20.8a4.622,4.622,0,1,1,0,9.243H6.627L5.165,16.569H22.3a4.638,4.638,0,0,1,0,9.276H5.391l1.164-2.936H21.539a1.831,1.831,0,1,0,0-3.663H4.1L0,29.508H22.3a8.3,8.3,0,0,0,4.416-15.325" transform="translate(0 0)" fill="#fff"></path>
      </g>
    </g>
  </svg>
)

const logo_color = (
  <svg width="112.073" height="29.508" viewBox="0 0 112.073 29.508">
    <defs>
      <clipPath id="clip-path">
        <rect id="사각형_9883" data-name="사각형 9883" width="112.073" height="29.508" fill="#fff"></rect>
      </clipPath>
    </defs>
    <g transform="translate(0 0)">
      <g transform="translate(0 0)" clip-path="url(#clip-path)">
        <path d="M96.784,15.089a2.336,2.336,0,0,0,1.06-2.039,2.492,2.492,0,0,0-.44-1.492,2.755,2.755,0,0,0-1.232-.936c-.063-.026-.133-.046-.2-.068a2.713,2.713,0,0,0,.97-.826,2.31,2.31,0,0,0,.41-1.362,2.269,2.269,0,0,0-.98-1.91A4.969,4.969,0,0,0,93.4,5.727H88.244v10.09h5.448a5.455,5.455,0,0,0,3.092-.728m-5.715-7.3h1.96a1.976,1.976,0,0,1,1.081.238.811.811,0,0,1,.36.727.831.831,0,0,1-.36.736,1.937,1.937,0,0,1-1.081.245H91.07Zm0,5.968V11.709h2.393a2.034,2.034,0,0,1,1.117.252.969.969,0,0,1,0,1.542,2.034,2.034,0,0,1-1.117.252Z" transform="translate(-52.67 -3.418)" fill="#fff"></path>
        <path d="M125.009,5.728H122.2v5.506a2.761,2.761,0,0,1-.5,1.859,1.781,1.781,0,0,1-1.4.562,1.8,1.8,0,0,1-1.406-.562,2.731,2.731,0,0,1-.512-1.859V5.728h-2.854v5.593a4.635,4.635,0,0,0,1.254,3.474,5.578,5.578,0,0,0,6.976,0,4.637,4.637,0,0,0,1.254-3.474Z" transform="translate(-68.953 -3.419)" fill="#fff"></path>
        <path d="M150.314,14.084a2.851,2.851,0,0,0,.5-1.621,2.564,2.564,0,0,0-.31-1.319,2.514,2.514,0,0,0-.814-.85,4.681,4.681,0,0,0-1.117-.519q-.613-.195-1.225-.325T146.22,9.2a2.773,2.773,0,0,1-.822-.317.6.6,0,0,1-.31-.526.727.727,0,0,1,.158-.461,1.084,1.084,0,0,1,.519-.325,3.046,3.046,0,0,1,.951-.122,5.142,5.142,0,0,1,1.369.194,6.842,6.842,0,0,1,1.427.584l.879-2.119a6.25,6.25,0,0,0-1.708-.656,8.588,8.588,0,0,0-1.953-.223,6.05,6.05,0,0,0-2.479.447,3.444,3.444,0,0,0-1.492,1.182,2.87,2.87,0,0,0-.5,1.644,2.415,2.415,0,0,0,1.138,2.183,4.861,4.861,0,0,0,1.117.526,11.7,11.7,0,0,0,1.225.331q.613.129,1.117.259a2.876,2.876,0,0,1,.822.332.621.621,0,0,1,.317.547.607.607,0,0,1-.166.425,1.151,1.151,0,0,1-.526.288,3.408,3.408,0,0,1-.951.108,5.809,5.809,0,0,1-1.766-.281,6.589,6.589,0,0,1-1.564-.714l-.936,2.1a6.175,6.175,0,0,0,1.867.8,9.086,9.086,0,0,0,2.385.31,6.043,6.043,0,0,0,2.487-.447,3.424,3.424,0,0,0,1.484-1.189" transform="translate(-84.809 -3.12)" fill="#fff"></path>
        <path d="M171.5,16.02a4.782,4.782,0,0,0,3.488-1.225,4.637,4.637,0,0,0,1.254-3.474V5.728h-2.811v5.506a2.76,2.76,0,0,1-.5,1.86,1.781,1.781,0,0,1-1.4.562,1.8,1.8,0,0,1-1.405-.562,2.733,2.733,0,0,1-.512-1.86V5.728H166.76V11.32a4.637,4.637,0,0,0,1.254,3.474A4.782,4.782,0,0,0,171.5,16.02" transform="translate(-99.533 -3.419)" fill="#fff"></path>
        <path d="M197.875,10.44l4.454,5.377h2.349V5.728h-2.8V11.1l-4.454-5.377h-2.349v10.09h2.8Z" transform="translate(-116.436 -3.419)" fill="#fff"></path>
        <path d="M228.173,15.72a7.974,7.974,0,0,0,2.234-.332,6.552,6.552,0,0,0,2-.951V10.257h-2.522v2.768a3.221,3.221,0,0,1-.3.123,3.781,3.781,0,0,1-1.24.208,3.121,3.121,0,0,1-1.16-.208,2.577,2.577,0,0,1-.9-.591,2.683,2.683,0,0,1-.584-.915,3.429,3.429,0,0,1,0-2.357,2.7,2.7,0,0,1,.584-.908,2.493,2.493,0,0,1,.908-.584,3.321,3.321,0,0,1,1.182-.2,3.1,3.1,0,0,1,1.333.281,3.622,3.622,0,0,1,1.117.843l1.816-1.644A4.775,4.775,0,0,0,230.782,5.7a6.967,6.967,0,0,0-4.807-.094,5.194,5.194,0,0,0-1.78,1.088,5.015,5.015,0,0,0-1.167,1.665,5.222,5.222,0,0,0-.418,2.111,5.218,5.218,0,0,0,.418,2.112,5.058,5.058,0,0,0,1.16,1.665,5.122,5.122,0,0,0,1.766,1.088,6.3,6.3,0,0,0,2.22.382" transform="translate(-132.868 -3.119)" fill="#fff"></path>
        <path d="M89.054,45.361h5.059V44.136H89.054v-3.1h5.679V39.783h-7.12v10.09h7.322V48.619H89.054Z" transform="translate(-52.293 -23.745)" fill="#fff"></path>
        <path d="M112.611,48.078l-3.634-8.295H107.42l4.44,10.09h1.427l4.425-10.09H116.27Z" transform="translate(-64.115 -23.745)" fill="#fff"></path>
        <path d="M137.573,45.361h5.059V44.136h-5.059v-3.1h5.679V39.783h-7.12v10.09h7.322V48.619h-5.881Z" transform="translate(-81.252 -23.745)" fill="#fff"></path>
        <path d="M166.284,46.384a3.218,3.218,0,0,0,1.441-1.2,3.409,3.409,0,0,0,.5-1.881,3.444,3.444,0,0,0-.5-1.888,3.208,3.208,0,0,0-1.441-1.211,5.538,5.538,0,0,0-2.263-.418h-3.935v10.09h1.442V46.8h2.493q.333,0,.641-.026l2.17,3.1H168.4L166,46.488c.094-.034.191-.065.28-.1m-2.306-.807h-2.45v-4.54h2.45a3.218,3.218,0,0,1,2.1.591,2.049,2.049,0,0,1,.714,1.672,2.07,2.07,0,0,1-.714,1.679,3.19,3.19,0,0,1-2.1.6" transform="translate(-95.55 -23.745)" fill="#fff"></path>
        <path d="M182.111,41.037h3.459v8.836H187V41.037h3.459V39.784h-8.346Z" transform="translate(-108.696 -23.745)" fill="#fff"></path>
        <path d="M208.151,45.361h5.059V44.136h-5.059v-3.1h5.679V39.783h-7.12v10.09h7.322V48.619h-5.881Z" transform="translate(-123.378 -23.745)" fill="#fff"></path>
        <path d="M231.158,41.875a3.783,3.783,0,0,1,1.261-.807A4.247,4.247,0,0,1,234,40.78a4.036,4.036,0,0,1,1.542.3,3.749,3.749,0,0,1,1.3.9l.937-.908a4.418,4.418,0,0,0-1.679-1.175,6.078,6.078,0,0,0-4.281-.015A5.018,5.018,0,0,0,229,42.6a5.466,5.466,0,0,0,0,4.122,5.072,5.072,0,0,0,1.117,1.636,4.971,4.971,0,0,0,1.686,1.081,5.766,5.766,0,0,0,2.126.382,5.677,5.677,0,0,0,2.169-.4,4.484,4.484,0,0,0,1.679-1.182l-.937-.908a3.655,3.655,0,0,1-1.3.915,4.021,4.021,0,0,1-1.542.3,4.247,4.247,0,0,1-1.579-.288,3.783,3.783,0,0,1-1.261-.807,3.638,3.638,0,0,1-.829-1.232,4.21,4.21,0,0,1,0-3.1,3.638,3.638,0,0,1,.829-1.232" transform="translate(-136.439 -23.574)" fill="#fff"></path>
        <path d="M263.716,39.783v4.339h-5.794V39.783H256.48v10.09h1.442v-4.5h5.794v4.5h1.441V39.783Z" transform="translate(-153.084 -23.745)" fill="#fff"></path>
        <path d="M26.719,14.183l-.067-.042.056-.057A8.279,8.279,0,0,0,20.8,0H11.783l-4,10.084H20.055a1.831,1.831,0,0,0,0-3.663H13.177l1.094-2.758H20.8a4.622,4.622,0,1,1,0,9.243H6.627L5.165,16.569H22.3a4.638,4.638,0,0,1,0,9.276H5.391l1.164-2.936H21.539a1.831,1.831,0,1,0,0-3.663H4.1L0,29.508H22.3a8.3,8.3,0,0,0,4.416-15.325" transform="translate(0 0)" fill="#fff"></path>
      </g>
    </g>
  </svg>
)


export default function RootLayout({ children }) {

  const path = usePathname();
  const currentPath = path === '/' ? 'main' : 'subpage';

  const [scroll, setScroll] = useState();

  useEffect(() => {
    const scrollEvent = () => {
        const header = document.querySelector('.header');
        if(window.scrollY > window.innerHeight){
          header.classList.add('header-scroll');
        } else {
          header.classList.remove('header-scroll');
        }
    }
    window.addEventListener('scroll', scrollEvent);
    
    return() => {
      window.addEventListener('scroll', scrollEvent);
    };
  } , []);

  //스크롤이 일정 이상 내려가면 header에 클래스 추가한다 
  
  return (
    <html lang="en" className="main">
      <body className={`${pretendard.variable} ${orbitron.variable} ${teko.variable} ${currentPath}`}>
        <header className="header">
          <div className="container">
            <div className="logo">
              <Link href="/">
                {logo}
              </Link>
            </div>
            <ul className="gnb-bar">
              <li className="gnb-bar-item">
                <Link href="/company/overview" className="gnb-btn">회사소개</Link>
                  <ul className="header-submenu">
                    <li className="header-submenu-item"><Link href="/company/overview">회사소개</Link></li>
                    <li className="header-submenu-item"><Link href="/">CI소개</Link></li>
                    <li className="header-submenu-item"><Link href="/">회사연혁</Link></li>
                    <li className="header-submenu-item"><Link href="/company/certification">인증서</Link></li>
                    <li className="header-submenu-item"><Link href="/">조직도</Link></li>
                    <li className="header-submenu-item"><Link href="/">오시는 길</Link></li>
                  </ul>
              </li>
              <li className="gnb-bar-item">
                <Link href="/" className="gnb-btn">제품소개</Link>
                <ul className="header-submenu">
                  <li className="header-submenu-item"><Link href="/">자동차 분야</Link></li>
                  <li className="header-submenu-item"><Link href="/">전자 분야</Link></li>
                  <li className="header-submenu-item"><Link href="/">생활 포장 분야</Link></li>
                  <li className="header-submenu-item"><Link href="/">사업 분야</Link></li>
                </ul>
              </li>
              <li className="gnb-bar-item">
                <Link href="/global-business/networks" className="gnb-btn">글로벌 비즈니스</Link>
                <ul className="header-submenu">
                  <li className="header-submenu-item"><Link href="/global-business/networks">글로벌 네트워크</Link></li>
                  <li className="header-submenu-item"><Link href="/">2030 사업계획</Link></li>
                </ul>
              </li>
              <li className="gnb-bar-item">
                <Link href="/" className="gnb-btn">ESG 경영</Link>

              </li>
              <li className="gnb-bar-item">
                <Link href="/" className="gnb-btn">고객지원</Link>
                <ul className="header-submenu">
                  <li className="header-submenu-item"><Link href="/">공지사항</Link></li>
                  <li className="header-submenu-item"><Link href="/">온라인 문의</Link></li>
                  <li className="header-submenu-item"><Link href="/">E-catalog</Link></li>
                </ul>
              </li>
            </ul>
            <div className="nav-etc">
              <button className="link--contact">
                <Link href="/ko" className="lang-btn active">KOR</Link>
                <span className="divide"></span>
                <Link href="/en" className="lang-btn">ENG</Link>
              </button>
            </div>
          </div>
          <div className="header-bg"></div>
        </header>
        {children}
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
      </body>
    </html>
  );
}
