import IntroHero from '../component/IntroHero.jsx';

export default function CompanyIntro ({children}){
  const depth2 = [
    { href: '/company/overview', label: '회사소개', path: 'company', segment: 'overview' },
    { href: '/', label: 'CI 소개', path: '', segment: '' },
    { href: '/', label: '회사연혁', path: '', segment: '' },
    { href: '/company/certification', label: '인증서', path: 'company', segment: 'certification' },
    { href: '/', label: '조직도', path: '', segment: '' },
    { href: '/', label: '오시는 길', path: '', segment: '' },
  ];

  return (
    <div>
      <IntroHero 
        title="company" 
        desc={
          <>
            부성에버텍은 30년의 생산 노하우와 끊임없는 연구 개발을 통해 고객의 요구에 충족되는 <br />
            우수한 품질의 제품과 서비스를 제공하겠습니다.
          </>
        } 
        depth2={depth2}
      />
    
      {children}

      
    </div>
  )
}