import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';
// import { Icon } from '@iconify/react';

export function CountDown() {

  const { state } = useTaskContext();
  return (
    <div className={`${styles.number} text-neutral`}>{state.formattedSecondsRemaining}</div>
  );
}