import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionsTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    //lazy initialization - já inicializa o estado com o valor do localStorage
    const savedState = localStorage.getItem('state');

    const parsedState = savedState ? JSON.parse(savedState) : initialTaskState;

    return {
      ...parsedState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    };
  });

  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  useEffect(() => {
    const handleMessage = (event: MessageEvent<number>) => {
      const countDownSeconds = event.data;

      if (countDownSeconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }
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
    };

    worker.onmessage(handleMessage);

    return () => {
      worker.onmessage(() => {});
    };
  }, [worker, dispatch]);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
      document.title = 'Pomo-Doro';
    } else document.title = `${state.formattedSecondsRemaining} - Pomo-Doro`;
    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
