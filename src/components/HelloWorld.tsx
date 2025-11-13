import styles from './HelloWorld.module.css';

export function HelloWorld(props: { children: React.ReactNode }) {
  return <h1 className={styles.title}>Olá, {props.children}!!</h1>;
}