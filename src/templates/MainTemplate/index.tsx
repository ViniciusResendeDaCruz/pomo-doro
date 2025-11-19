import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
 
export function MainTemplate({ children }:{children: React.ReactNode} ) {
  return (
    <>
      <div className='d-flex flex-column align-items-center vh-100 w-100 p-4'>
        <Logo />
        {/* <HelloWorld>Mundo</HelloWorld> */}
        <Menu />
        {children}
        <Footer />
      </div>
    </>
  );
}
