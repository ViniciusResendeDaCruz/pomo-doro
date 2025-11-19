import styles from './styles.module.css';
// import { Icon } from '@iconify/react';

export function Container({ children }: { children: React.ReactNode }) {
  
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        {children}
      </div>
    </div>
  );
}