import Footer from './footer';
import Header from './header';

export default function Layout({children}){
  return (
    <div>
      <Header />
      레이아웃
      {children}
      <Footer />
    </div>
  )
}