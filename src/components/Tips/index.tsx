import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
// import styles from './styles.module.css';
// import { Icon } from '@iconify/react';

export function Tips({nextCycleType}:{nextCycleType: TaskModel['type']}) {
  const { state } = useTaskContext();
  const tipsForActiveTask = {
    workTime: <span>Trabalhe por <strong>{state.config.workTime}</strong> minutos.</span>,
    shortBreakTime: <span>Descanse por <strong>{state.config.shortBreakTime}</strong> min.</span>,
    longBreakTime: <span>Descanse por <strong>{state.config.longBreakTime}</strong> min.</span>,
  }

  const tipsForInactiveTask = {
    workTime: <span>Próximo ciclo é de <strong>{state.config.workTime}</strong> minutos.</span>,
    shortBreakTime: <span>Próximo descanso é de <strong>{state.config.shortBreakTime}</strong> min.</span>,
    longBreakTime: <span>Próximo descanso é de <strong>{state.config.longBreakTime}</strong> min.</span>,
  }
  // console.log('state.activeTask', state.activeTask);
  return (
    <span className='fs-5'>{
      state.activeTask ? 
        tipsForActiveTask[state.activeTask.type] 
        : tipsForInactiveTask[nextCycleType]
    }</span>
  );
}