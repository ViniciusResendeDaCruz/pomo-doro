import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.endsAt) {
    return 'Completada';
  } else if (task.interruptedAt) {
    return 'Interrompida';
  } else if (task.id === activeTask?.id) {
    return 'Em andamento';
  }
  return 'Abandonada';
}
