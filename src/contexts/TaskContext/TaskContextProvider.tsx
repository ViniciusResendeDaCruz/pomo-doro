import { TaskContext } from "./TaskContext";
import { useState } from "react";
import { initialTaskState } from "./initialTaskState";

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(initialTaskState);
    return (
      <TaskContext.Provider value={{ state, setState }}>
        {children}
      </TaskContext.Provider>
    );
  }