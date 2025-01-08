import { create } from 'zustand'
import { Task } from './task';

interface Context {
  tasks: Task[];
  loadTasks: (tasks: Task[]) => void;
  addTask: (newTask: Task) => void;
  removeTask: (id: string) => void;
  updateTask: (newTask: Task) => void;
}

const useStore = create<Context>()((set) => ({
  tasks: [],
  loadTasks: (tasks) => set({tasks: tasks.sort((a, b) => Number(new Date(b.get().createdAt)) - Number(new Date(a.get().createdAt)))}),
  addTask: (newTask) => set((state) => ({tasks: [newTask, ...state.tasks]})),
  removeTask: (id) => set((state) => ({tasks: state.tasks.filter(task => task.get().id !== id)})),
  updateTask: (newTask) => set((state) => ({tasks: state.tasks.map(task => task.get().id === newTask.get().id ? newTask : task)}))
}))

export { useStore };
