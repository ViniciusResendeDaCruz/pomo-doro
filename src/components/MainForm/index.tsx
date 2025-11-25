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

  return (
    <Form className='mt-4 text-neutral' onSubmit={handleCreateNewTask}>
      <Form.Group className='d-flex flex-row align-items-center'>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type='text'
          placeholder='Insira a tarefa que irá ser feita'
          className='w-100'
          ref={taskNameRef}
        />
      </Form.Group>

      <span className='fs-6'>Lorem ipsum dolor sit amet.</span>

      <CycleRow />

      <Button variant='outline-primary' type='submit' className='w-100'>
        Start
      </Button>
    </Form>
  );
}
