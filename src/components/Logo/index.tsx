import styles from './styles.module.css';
import { Icon } from '@iconify/react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Logo() {
  const { setState } = useTaskContext();

  const handleClick = () => {
    //aumenta em 1 segundo o tempo de execução da tarefa
    //formattedSecondsRemaining string no formato MM:SS
    setState(prevState => ({ ...prevState, formattedSecondsRemaining: '22:00' }));
  };

  return (
    <div
      className={`${styles.logo} d-flex flex-column align-items-center w-100 justify-content-center mb-4`}
    >
      <Icon
        icon='tabler:apple'
        className='text-primary mb-2'
        width={100}
        height={100}
        onClick={handleClick}
      />
      <h1 className='text-primary fs-1 fw-bold'>Pomo-Doro</h1>
    </div>
  );
}
