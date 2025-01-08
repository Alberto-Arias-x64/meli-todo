import { CalendarCheck } from "lucide-react"
import Input from "../../ui/input/input"
import Textarea from "../../ui/text-area/text-area"
import Button from "../../ui/button/button"
import { useState } from "react"
import { useStore } from "../../lib/taskContext"
import { Task } from "../../lib/task"

const Form = () => {
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [description, setDescription] = useState("")
  const store = useStore()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(title === ""){
      setTitleError(true)
      return
    }
    setTitleError(false)
    store.addTask(new Task(await Task.create({title, description})))
    handleClear()
  }

  const handleClear = () => {
    setTitle("")
    setDescription("")
  }

  return(
    <form onSubmit={handleSubmit} className="flex-column gap-small margin-top-big flex-center">
      <Input className="size-full-width" type="text" placeholder="Crea tu tarea" update={title} output={setTitle} error={titleError}>
        <CalendarCheck height={16} color="#343434"/>
      </Input>
      <Textarea className="size-full-width" placeholder="Añade una descripción (opcional)" update={description} output={setDescription}/>
      <div className="flex-row gap-small justify-end size-full-width">
        <Button variant="SECONDARY" type="button" onClick={handleClear}> Limpiar </Button>
        <Button type="submit"> Añadir </Button>
      </div>
    </form>
  )
}

export default Form;