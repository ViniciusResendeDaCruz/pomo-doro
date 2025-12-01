import './styles/styles.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MainRoutes } from './routers/MainRoutes';
// import { Info } from './pages/Info';

export function App() {
  return (
    <TaskContextProvider>
      <MainRoutes />
    </TaskContextProvider>
  );
}
