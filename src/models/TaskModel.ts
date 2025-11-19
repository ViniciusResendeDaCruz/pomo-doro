export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startsAt: number;
  endsAt: number | null;
  interruptedAt: number | null;
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};
