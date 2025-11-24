import { initialTaskState } from "./initialTaskState";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { createContext } from "react";

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
