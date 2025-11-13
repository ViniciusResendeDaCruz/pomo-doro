import styles from './HelloWorld.module.css';

export function HelloWorld({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.title}>Olá, {children}!!</h1>;
}