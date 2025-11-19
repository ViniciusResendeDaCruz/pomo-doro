// import styles from './styles.module.css';
// import { Icon } from '@iconify/react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='d-flex flex-row justify-content-center align-items-center fixed-bottom border-top border-dark py-4 text-neutral'>
      <span className='fs-6 text-center'>
       <strong>Pomo-Doro</strong> © {year} - Desenvolvido com 💜 por <a href='https://github.com/ViniciusResendeDaCruz' target='_blank' rel='noopener noreferrer'>Vincius Resende</a>
      </span>
      {/* <span className='fs-6 text-center'>Desenvolvido por <a href='https://github.com/ViniciusResendeDaCruz' target='_blank' rel='noopener noreferrer'>Vincius Resende</a></span> */}
    </footer>
  );
}
