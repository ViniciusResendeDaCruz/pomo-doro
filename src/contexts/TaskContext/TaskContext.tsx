import { initialTaskState } from "./initialTaskState";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { createContext } from "react";
import type { TaskActionModel } from "./taskActions";

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
