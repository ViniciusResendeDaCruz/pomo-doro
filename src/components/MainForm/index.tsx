// import styles from './styles.module.css';
// import { Icon } from '@iconify/react';
import { Button, Form } from 'react-bootstrap';
import { CycleRow } from '../CycleRow';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { Icon } from '@iconify/react';

export function MainForm() {
  const taskNameRef = useRef<HTMLInputElement>(null);

  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskNameRef.current?.value === null) return;

    const taskName = taskNameRef.current?.value.trim();

    if (!taskName) {
      Swal.fire({
        toast: true,
        text: 'A tarefa não pode ser vazia',
        icon: 'error',
        timer: 3000,
        position: 'top-end',
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      return;
    }

    const newTask: TaskModel = {
      id: uuidv4(),
      name: taskName,
      startsAt: Date.now(),
      endsAt: null,
      interruptedAt: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining, //convertido para segundos acima
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prevState.tasks, newTask],
    }));

    console.log(newTask);
  };

  const handlePauseTask = () => {
    setState(prevState => ({
      ...prevState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
      tasks: prevState.tasks.map(task => {
        if(prevState.activeTask?.id === task.id){
          return {
            ...task,
            interruptedAt: Date.now(),
          };
        }
        return task;
      }),
    }));
  };

  return (
    <Form className='mt-4 text-neutral' onSubmit={handleCreateNewTask}>
      <Form.Group className='d-flex flex-row align-items-center'>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type='text'
          placeholder='Insira a tarefa que irá ser feita'
          className='w-100'
          ref={taskNameRef}
          disabled={!!state.activeTask}
        />
      </Form.Group>

      <span className='fs-6'>Lorem ipsum dolor sit amet.</span>

      {state.currentCycle > 0 && <CycleRow />}

      {!state.activeTask ? (
        <Button
          variant='outline-primary'
          type='submit'
          className='w-100'
          title='Iniciar a tarefa'
          aria-label='Iniciar a tarefa'
          aria-labelledby='Iniciar a tarefa'
          key='start-task-button'
        >
          <Icon icon='solar:play-circle-bold-duotone' width={24} height={24} />
        </Button>
      ) : (
        <Button
          variant='outline-danger'
          type='button'
          className='w-100'
          title='Pausar a tarefa'
          aria-label='Pausar a tarefa'
          aria-labelledby='Pausar a tarefa'
          onClick={handlePauseTask}
          key='pause-task-button'
        >
          <Icon icon='solar:pause-circle-bold-duotone' width={24} height={24} />
        </Button>
      )}
    </Form>
  );
}
