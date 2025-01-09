import { TaskStatus, Task } from "../../lib/task";
import { useStore } from "../../lib/taskContext";
import { PencilLine, X } from "lucide-react";
import Modal from "../../ui/modal/modal";
import { format, isAfter } from "@formkit/tempo";
import Card from "../../ui/card/card";
import { useState } from "react";
import Form from "../form/form";
import "./task.css"

interface props{
  data: Task
}

const TaskComponent = ({data}: props) => {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);
  const {status, id, createdAt, description, title, deadLine} = data.get()
  const store = useStore((state) => state);

  const handleCheck = () => {
    const overDeadLine = isAfter(new Date(), new Date(deadLine))
    const newStatus = status === "IN_PROGRESS" || status === "PENDING" ? TaskStatus.DONE : overDeadLine ? TaskStatus.PENDING : TaskStatus.IN_PROGRESS
    store.updateTask({...data.get(), status: newStatus, deadLine: deadLine ? new Date(deadLine) : undefined});
  }

  const handleDelete = () => {
    store.removeTask(data.get().id);
  }

  return(
    <>
      <section className={`task flex-row ${status === TaskStatus.PENDING && "pending"} ${status === TaskStatus.DONE && "done"}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className="size-full-height">
          <div className="decorator"></div>
        </div>
        <div className="padding-small size-full-width">
          <div className="header">
            <input type="checkbox" name={id} id={id} className="pointer" onChange={handleCheck} checked={status === TaskStatus.DONE}/>
            <h3>{title}</h3>
            {hover && (
              <div className="actions">
                {status !== TaskStatus.DONE ? <PencilLine size={16} color="#00000086" className="pointer" onClick={() => setModal(true)}/> : <span></span>}
                <X size={16} color="#00000086" className="pointer" onClick={handleDelete}/>
              </div>
            )}
          </div>
          <p className="text-small margin-top-small">{description}</p>
          <p className="text-tiny text-bold text-gray text-end">{format({date: createdAt, format: 'medium', locale: "es"})} {deadLine && `- ${format({date: deadLine, format: 'medium', locale: "es"})}`}</p>
        </div>
      </section>
      <Modal update={modal}>
        <Card className="modal size-full-width">
          <X color="#00000086" className="close pointer" onClick={() => setModal(false)}/>
          <h2>Edita tu tarea</h2>
          <Form variant="EDIT" task={data} submitted={() => setModal(false)}></Form>
        </Card>
      </Modal>
    </>
  )
}

export default TaskComponent;