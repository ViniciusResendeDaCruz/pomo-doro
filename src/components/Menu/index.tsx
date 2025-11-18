// import styles from './styles.module.css';
import { Icon } from '@iconify/react';
import {Button } from 'react-bootstrap';

export function Menu() {
  return (
    <nav className='d-flex flex-row justify-content-center align-items-center'>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:home-2-bold-duotone'  width={32} height={32} />
        </Button>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:clock-square-bold-duotone'  width={32} height={32} />
        </Button>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:settings-bold-duotone'  width={32} height={32} />
        </Button>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:palette-bold-duotone'  width={32} height={32} />
        </Button>
      </nav>
  );
}
