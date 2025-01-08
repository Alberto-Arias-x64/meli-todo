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

class Task {
  private data: Itask;
  constructor(data: Itask) {
    this.data = data;
  }
  public async create({ title, description }:{ title: string; description: string;}) {
    if (!this.data.id){
      this.data.id = crypto.randomUUID();
      this.data.createdAt = new Date().toISOString();
      this.data.title = title;
      this.data.description = description;
      const docRef = doc(db, "tasks", this.data.id);
      /* await setDoc(docRef, {
        title: this.data.title,
        description: this.data.description,
        status: this.data.status,
        createdAt: Timestamp.fromDate(new Date(this.data.createdAt)),
      }) */
      return true
    }
  }

  public async update({title, description, status}: { title: string; description: string; status: TaskStatus}) {
    this.data.title = title;
    this.data.description = description;
    this.data.status = status;
    const docRef = doc(db, "tasks", this.data.id);
    /* await setDoc(docRef, {
      title: this.data.title,
      description: this.data.description,
      status: this.data.status,
      createdAt: Timestamp.fromDate(new Date(this.data.createdAt)),
    }) */
    return true
  }

  public async delete() {
    const docRef = doc(db, "tasks", this.data.id);
    await deleteDoc(docRef);
    return true
  }

  public get() {
    return this.data;
  }
}

export { TaskStatus, Task };
export type { Itask };
