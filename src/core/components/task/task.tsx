import { TaskStatus, Task } from "../../lib/task";
import { useStore } from "../../lib/taskContext";
import { PencilLine, X } from "lucide-react";
import { format } from "@formkit/tempo";
import { useState } from "react";
import "./task.css"

interface props{
  data: Task
}

const TaskComponent = ({data}: props) => {
  const [hover, setHover] = useState(false);
  const {status, id, createdAt, description, title} = data.get()
  const store = useStore((state) => state);

  const handleCheck = async () => {
    const newStatus = status === TaskStatus.DONE ? TaskStatus.IN_PROGRESS : TaskStatus.DONE;
    await data.update({...data.get(), status: newStatus});
    store.updateTask(data);
  }

  const handleDelete = async () => {
    //await data.delete();
    store.removeTask(data.get().id);
  }

  return(
    <section className={`task flex-row ${status === TaskStatus.DONE && "done"}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="size-full-height">
        <div className="decorator"></div>
      </div>
      <div className="padding-small size-full-width">
        <div className="header">
          <input type="checkbox" name={id} id={id} className="pointer" onChange={handleCheck} checked={status === TaskStatus.DONE}/>
          <h3>{title}</h3>
          {hover && (
            <div className="actions">
              <PencilLine size={16} color="#00000086" className="pointer"/>
              <X size={16} color="#00000086" className="pointer" onClick={handleDelete}/>
            </div>
          )}
        </div>
        <p className="text-small">{description}</p>
        <p className="text-tiny text-bold text-gray text-end">{format({date: createdAt, format: 'medium', locale: "es"})}</p>
      </div>
    </section>
  )
}

export default TaskComponent;