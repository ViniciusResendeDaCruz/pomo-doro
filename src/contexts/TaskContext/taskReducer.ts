import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionsTypes, type TaskActionModel } from './taskActions';
import { getNextCycle } from '../../utils/getNextCycle';
// import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      //   const nextCycleType = getNextCycleType(nextCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionsTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return { ...task, interruptedAt: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining,
        ),
      };
    }
    case TaskActionsTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return { ...task, endsAt: Date.now() };
          }
          return task;
        }),
      };
    }
    default:
      return state;
  }
}
