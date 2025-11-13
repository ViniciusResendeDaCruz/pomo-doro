import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Icon } from '@iconify/react';
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Icon icon="solar:bell-bold-duotone" className="text-primary fs-1" />
    <App />
  </StrictMode>,
)
