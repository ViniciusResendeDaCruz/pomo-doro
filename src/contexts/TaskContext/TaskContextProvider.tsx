import { TaskContext } from './TaskContext';
import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionsTypes } from './taskActions';

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {
    const countDownSeconds = event.data;
    // console.log(event.data);

    if (countDownSeconds <= 0) {
      // console.log('terminando worker, countDownSeconds <= 0');
      dispatch({
        type: TaskActionsTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    console.log('state', state);
    if (!state.activeTask) {
      // console.log('terminando worker, inactive task');
      worker.terminate();
    }

    // console.log('posting message to worker');
    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
