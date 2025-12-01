import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Form, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useRef } from 'react';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import Swal from 'sweetalert2';

export function Config() {
  const { state, dispatch } = useTaskContext();

  const workTimeRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeRef = useRef<HTMLInputElement>(null);
  const longBreakTimeRef = useRef<HTMLInputElement>(null);

  const handleSaveConfig = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const workTimeVal = Number(workTimeRef.current?.value) || 0;
    const shortBreakTimeVal = Number(shortBreakTimeRef.current?.value) || 0;
    const longBreakTimeVal = Number(longBreakTimeRef.current?.value) || 0;

    if (
      isNaN(workTimeVal) ||
      isNaN(shortBreakTimeVal) ||
      isNaN(longBreakTimeVal)
    ) {
      Swal.fire({
        toast: true,
        text: 'Os tempos devem ser números válidos',
        icon: 'error',
        timer: 3000,
        position: 'top-end',
      });
    }

    if (workTimeVal <= 0 || shortBreakTimeVal <= 0 || longBreakTimeVal <= 0) {
      Swal.fire({
        toast: true,
        text: 'Os tempos devem ser maiores que 0',
        icon: 'error',
        timer: 3000,
        position: 'top-end',
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }

    dispatch({
      type: TaskActionsTypes.SAVE_CONFIG,
      payload: {
        workTime: workTimeVal,
        shortBreakTime: shortBreakTimeVal,
        longBreakTime: longBreakTimeVal,
      },
    });

    Swal.fire({
      toast: true,
      text: 'Configurações salvas com sucesso',
      icon: 'success',
      timer: 3000,
      position: 'top-end',
      showConfirmButton: false,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  return (
    <MainTemplate>
      <Container>
        <h1 className='text-neutral mt-5'>Configurações</h1>
      </Container>

      <Container>
        <Form className='mt-4 text-neutral' onSubmit={handleSaveConfig}>
          <Form.Group className='d-flex flex-column align-items-center mt-3'>
            <Form.Label>Tempo de Foco</Form.Label>
            <Form.Control
              type='number'
              placeholder='Insira o tempo de foco (em minutos)'
              className='w-100'
              ref={workTimeRef}
              defaultValue={state.config.workTime}
            />
          </Form.Group>

          <Form.Group className='d-flex flex-column align-items-center mt-3'>
            <Form.Label>Tempo de Pausa Curta</Form.Label>
            <Form.Control
              type='number'
              placeholder='Insira o tempo de pausa curta (em minutos)'
              className='w-100'
              ref={shortBreakTimeRef}
              defaultValue={state.config.shortBreakTime}
            />
          </Form.Group>

          <Form.Group className='d-flex flex-column align-items-center mt-3'>
            <Form.Label>Tempo de Pausa Longa</Form.Label>
            <Form.Control
              type='number'
              placeholder='Insira o tempo de pausa longa (em minutos)'
              className='w-100'
              ref={longBreakTimeRef}
              defaultValue={state.config.longBreakTime}
            />
          </Form.Group>

          <Button
            variant='outline-primary'
            type='submit'
            className='w-100 mt-3'
            title='Iniciar a tarefa'
            aria-label='Iniciar a tarefa'
            aria-labelledby='Iniciar a tarefa'
            key='start-task-button'
          >
            <Icon icon='solar:diskette-bold-duotone' width={24} height={24} />
          </Button>
        </Form>
      </Container>
    </MainTemplate>
  );
}
