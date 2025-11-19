import './styles/styles.css';
import './styles/global.css';
// import { HelloWorld } from './components/HelloWorld';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { MainForm } from './components/MainForm';
 
export function App() {
  console.log('MyApp');
  return (
    <>
      <div className='d-flex flex-column align-items-center vh-100 w-100 p-4'>
        <Logo />
        {/* <HelloWorld>Mundo</HelloWorld> */}
        <Menu />
        <CountDown />
        <MainForm />
      </div>
    </>
  );
}
