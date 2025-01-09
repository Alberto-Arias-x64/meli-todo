import Textarea from "../../ui/text-area/text-area"
import { Task, TaskStatus } from "../../lib/task"
import { useStore } from "../../lib/taskContext"
import { CalendarCheck } from "lucide-react"
import Button from "../../ui/button/button"
import Input from "../../ui/input/input"
import { useState } from "react"

interface Props{
  variant?: "NEW" | "EDIT"
  task?: Task
  submitted?: VoidFunction
}

const Form = ({variant, task, submitted}: Props) => {
  const [title, setTitle] = useState(task?.get().title ?? "")
  const [titleError, setTitleError] = useState(false)
  const [description, setDescription] = useState(task?.get().description ?? "")
  const [date, setDate] = useState(task?.get().deadLine?.split("T")[0] ?? "")
  const store = useStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(title === ""){
      setTitleError(true)
      return
    }
    setTitleError(false)
    const dateCheck = date ? new Date(date) : undefined
    if (variant === "EDIT" && task) store.updateTask({id: task.get().id,title, description, status: TaskStatus.IN_PROGRESS, deadLine: dateCheck})
    else store.addTask({title, description, deadLine: dateCheck})
    handleClear()
    if (submitted) submitted()
  }

  const handleClear = () => {
    setTitle("")
    setTitleError(false)
    setDescription("")
    setDate("")
  }

  const handleSetDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    const correctDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    setDate(correctDate.toISOString().split("T")[0])
  }

  return(
    <form onSubmit={handleSubmit} className="flex-column gap-small margin-top-huge flex-center">
      <Input className="size-full-width" type="text" placeholder="Crea tu tarea" update={title} output={setTitle} error={titleError} onChange={() => setTitleError(false)}>
        <CalendarCheck height={16} color="#343434"/>
      </Input>
      <Textarea className="size-full-width" placeholder="Añade una descripción (opcional)" update={description} output={setDescription}/>
      <Input className="size-full-width" type="date" placeholder="Fecha de entrega (opcional)" update={date} output={handleSetDate} />
      <div className="flex-row gap-small justify-end size-full-width">
        {variant !== "EDIT" && <Button type="button" variant="SECONDARY" onClick={handleClear}> Limpiar </Button>}
        <Button type="submit"> {variant !== "EDIT" ? "Añadir" : "Editar"} </Button>
      </div>
    </form>
  )
}

export default Form;