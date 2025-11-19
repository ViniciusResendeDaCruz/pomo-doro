// import styles from './styles.module.css';
// import { Icon } from '@iconify/react';
import { Button, Form } from 'react-bootstrap';
import { CycleRow } from '../CycleRow';

export function MainForm() {
  return (
    <Form className='mt-4'>
      <Form.Group className='d-flex flex-row align-items-center'>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type='text'
          placeholder='Insira a tarefa que irá ser feita'
          className='w-100'
        />
      </Form.Group>

      <span className='fs-6'>
        Lorem ipsum dolor sit amet.
      </span>

      <CycleRow />

      <Button variant='outline-primary' type='submit' className='w-100'>
        Start
      </Button>
    </Form>
  );
}
