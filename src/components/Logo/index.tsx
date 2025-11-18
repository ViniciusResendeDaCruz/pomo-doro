import styles from './styles.module.css';
import { Icon } from '@iconify/react';

export function Logo() {
  
  return (
    <div className={`${styles.logo} d-flex flex-column align-items-center w-100 justify-content-center mb-4`}>
        <Icon icon="tabler:apple" className="text-primary mb-2" width={100} height={100} />
        <h1 className='text-primary fs-1 fw-bold'>Pomo-Doro</h1>
    </div>
  );
}