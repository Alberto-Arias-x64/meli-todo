import { deleteDoc, doc, setDoc, Timestamp  } from "firebase/firestore";
import {db} from "./firebase";

enum TaskStatus {
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

interface Itask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
}

interface ItaskFirebase {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Timestamp;
}

class Task {
  private data: Itask = {
    id: "",
    createdAt: "",
    description: "",
    status: TaskStatus.IN_PROGRESS,
    title: ""
  };
  constructor() {}
  public async create({ title, description }:{ title: string; description: string;}) {
    if (this.data.id) throw new Error("Already exist")
    this.data.id = crypto.randomUUID()
    this.data.title = title
    this.data.description = description
    this.data.status = TaskStatus.IN_PROGRESS
    this.data.createdAt = new Date().toISOString()
    const docRef = doc(db, "tasks", this.data.id);
    await setDoc(docRef, {
      title: this.data.title,
      description: this.data.description,
      status: this.data.status,
      createdAt: Timestamp.fromDate(new Date(this.data.createdAt)),
    })
  }

  public async update({title, description, status}: { title: string; description: string; status: TaskStatus}) {
    if (!this.data.id) throw new Error("Element not exist")
    this.data.title = title;
    this.data.description = description;
    this.data.status = status;
    const docRef = doc(db, "tasks", this.data.id);
    await setDoc(docRef, {
      title: this.data.title,
      description: this.data.description,
      status: this.data.status,
      createdAt: Timestamp.fromDate(new Date(this.data.createdAt)),
    })
  }

  public async delete() {
    if (!this.data.id) throw new Error("Element not exist")
    const docRef = doc(db, "tasks", this.data.id);
    await deleteDoc(docRef);
    return true
  }

  public get() {
    return this.data;
  }

  public load(data: Itask){
    this.data = data
  }
}

export { TaskStatus, Task };
export type { Itask, ItaskFirebase };
