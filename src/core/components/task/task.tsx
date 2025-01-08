import { TaskStatus, Task, Itask } from "../../lib/task";
import { PencilLine, X } from "lucide-react";
import { format } from "@formkit/tempo";
import { useState } from "react";
import "./task.css"

interface props{
  data: Task
}

const TaskComponent = ({data}: props) => {
  const [hover, setHover] = useState(false);
  const [info, setInfo] = useState<Itask>(data.get());

  const handleCheck = async () => {
    const newStatus = info.status === TaskStatus.DONE ? TaskStatus.IN_PROGRESS : TaskStatus.DONE;
    await data.update({...data.get(), status: newStatus});
    setInfo({...info, status: newStatus});
  }

  return(
    <section className={`task flex-row ${info.status === TaskStatus.DONE && "done"}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="size-full-height">
        <div className="decorator"></div>
      </div>
      <div className="padding-small size-full-width">
        <div className="header">
          <input type="checkbox" name={info.id} id={info.id} className="pointer" onChange={handleCheck} checked={info.status === TaskStatus.DONE}/>
          <h3>{info.title}</h3>
          {hover && (
            <div className="actions">
              <PencilLine size={16} color="#00000086" className="pointer"/>
              <X size={16} color="#00000086" className="pointer"/>
            </div>
          )}
        </div>
        <p className="text-small">{info.description}</p>
        <p className="text-tiny text-bold text-gray text-end">{format({date: info.createdAt, format: 'medium', locale: "es"})}</p>
      </div>
    </section>
  )
}

export default TaskComponent;