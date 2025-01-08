import { Itask, Task, TaskStatus } from "../lib/task";


const mock: Itask[] = [
  {
    id: "1",
    title: "Create user authentication",
    description: "Implement JWT-based authentication in the backend.",
    status: TaskStatus.IN_PROGRESS,
    createdAt: "2025-01-08T08:30:00.000Z",
  },
  {
    id: "2",
    title: "Design landing page",
    description: "Design a responsive landing page using Tailwind CSS.",
    status: TaskStatus.IN_PROGRESS,
    createdAt: "2025-01-06T12:00:00.000Z",
  },
  {
    id: "3",
    title: "Set up database schema",
    description: "Define database tables and relationships for the project.",
    status: TaskStatus.DONE,
    createdAt: "2025-01-05T09:00:00.000Z",
  },
  {
    id: "4",
    title: "Write API documentation",
    description: "Document the API endpoints for developers.",
    status: TaskStatus.IN_PROGRESS,
    createdAt: "2025-01-08T08:45:00.000Z",
  }
];

const mockTasks = mock.map((task) => {
  const myTask = new Task();
  myTask.load(task);
  return myTask
})

export default mockTasks;
