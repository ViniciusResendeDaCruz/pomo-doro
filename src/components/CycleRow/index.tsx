// import styles from './styles.module.css';
// import { Icon } from '@iconify/react';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { Icon } from '@iconify/react';
import styles from './styles.module.css';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function CycleRow() {
  const { state } = useTaskContext();

  const cycleTypeMap = {
    workTime: 'Trabalho',
    shortBreakTime: 'Pausa curta',
    longBreakTime: 'Pausa longa',
  };

  //constroi os cycles a partir do state.currentCycle
  const cycles = Array.from({ length: state.currentCycle }, (_, index) => ({
    id: index + 1,
    type: getNextCycleType(index + 1),
  }));
  return (
    <div className='d-flex flex-column align-items-center mt-4 text-neutral'>
      <span className='fs-6 text-center'>Ciclos</span>
      <div className='cycleDots'>
        {cycles.map(task => (
          <span
            key={task.id}
            aria-label={`Ciclo ${task.id} - ${cycleTypeMap[task.type]}`}
            title={`Ciclo ${task.id} - ${cycleTypeMap[task.type]}`}
          >
            <Icon
              icon='solar:check-circle-bold-duotone'
              className={styles[`${task.type}Dot`]}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
