import { FilterType } from "../filter/filter";
import { Check, Clock, TriangleAlert } from "lucide-react";
import TaskComponent from "../task/task";
import { Task } from "../../lib/task";
import Card from "../../ui/card/card";

interface Props {
  category?: FilterType;
  data: Task[];
}

const Category = ({ category, data }: Props) => {
  return (
    <Card className="flex-column gap-small appear">
      {category === FilterType.IN_PROGRESS && (<h2 className="text-blue flex-row aling-center gap-small"> <Clock /> En proceso </h2>)}
      {category === FilterType.DONE && (<h2 className="text-green flex-row aling-center gap-small"> <Check /> Completadas </h2>)}
      {category === FilterType.PENDING && (<h2 className="text-orange flex-row aling-center gap-small"> <TriangleAlert /> Pendientes </h2>)}
      {data.length ? data.map((task) => <TaskComponent key={task.get().id} data={task} />) : <p>{category === FilterType.DONE ? "Estas al dia" : "No tienes tareas pendientes"}</p>}
    </Card>
  );
};

export default Category;
