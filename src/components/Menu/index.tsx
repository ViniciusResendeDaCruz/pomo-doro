// import styles from './styles.module.css';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

export function Menu() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    //Lazy initialization - já inicializa o estado com o valor do localStorage
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') ?? 'dark';
  });

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const iconTheme = {
    light: 'solar:moon-stars-bold-duotone',
    dark: 'solar:sun-2-line-duotone',
  };

  return (
    <nav className='d-flex flex-row justify-content-center align-items-center'>
      <RouterLink href='/'>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:home-2-bold-duotone' width={32} height={32} />
        </Button>
      </RouterLink>

      <RouterLink href='/history'>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:clock-square-bold-duotone' width={32} height={32} />
        </Button>
      </RouterLink>

      <RouterLink href='/settings'>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:settings-bold-duotone' width={32} height={32} />
        </Button>
      </RouterLink>

      <RouterLink href='/info'>
        <Button variant='outline-primary' className='mx-3 p-2'>
          <Icon icon='solar:info-circle-bold-duotone' width={32} height={32} />
        </Button>
      </RouterLink>

      <Button
        variant='outline-primary'
        title='Alterar o tema'
        aria-label='Alterar o tema do site'
        className='mx-3 p-2'
        onClick={handleTheme}
      >
        <Icon icon={iconTheme[theme]} width={32} height={32} />
      </Button>
    </nav>
  );
}
