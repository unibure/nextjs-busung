import IntroHero from '../component/IntroHero.jsx';

export default function GlobalIntro ({children}){
  const depth2 = [
    { href: '/global-business/networks', label: '글로벌 네트워크', path: 'global-business', segment: 'networks' },
    { href: '/', label: '2030 사업계획', path: '', segment: '' },
  ];

  return (
    <div>
      <IntroHero 
      title="global Business" 
      desc={<>부성에버텍은 지속적인 기술 개발을 활용하여 <br /> 글로벌 기업으로 도약하고 있습니다.</>} 
      depth2={depth2}
      ></IntroHero>
      {children}
    </div>
  )
}