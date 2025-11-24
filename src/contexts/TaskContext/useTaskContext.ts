import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export function useTaskContext() {
  // Hook para usar o contexto no componente
  return useContext(TaskContext);
}
