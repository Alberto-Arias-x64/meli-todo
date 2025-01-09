import { create } from 'zustand'
import { Task, TaskStatus } from './task';

interface Context {
  tasks: Task[];
  loadTasks: (tasks: Task[]) => void;
  addTask: ({title, description}: {title: string, description: string}) => Promise<void>
  updateTask: ({id, title, description, status}: {id: string, title: string, description: string, status: TaskStatus}) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
}

const useStore = create<Context>()((set,get) => ({
  tasks: [],

  loadTasks: (tasks) => set({tasks: tasks.sort((a, b) => Number(new Date(b.get().createdAt)) - Number(new Date(a.get().createdAt)))}),

  addTask: async (data) => {
    const newTask = new Task()
    await newTask.create({...data})
    set((state) => ({tasks: [newTask, ...state.tasks]}))
  },

  updateTask: async (data) => {
    const element = get().tasks.find(task => task.get().id === data.id)
    if (element) {
      await element.update({...data})
      set((state) => ({tasks: state.tasks.map(task => task.get().id === data.id ? element : task)}))
    }
  },
  
  removeTask: async(id) => {
    const element = get().tasks.find(task => task.get().id === id)
    if (element) {
      await element.delete()
      set((state) => ({tasks: state.tasks.filter(task => task.get().id !== id)}))
    }
  }
}))

export { useStore };
