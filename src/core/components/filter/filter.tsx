import { useState } from "react";
import Pill from "../../ui/pill/pill";

enum FilterType {
  All = 'ALL',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = "DONE",
  PENDING = "PENDING",
}

interface Props{
  output: (filter: FilterType) => void
}

const Filter = ({output}: Props) => {
  const [value, setValue] = useState<FilterType>(FilterType.All);
  const handleFilter = (value: FilterType) => {
    setValue(value)
    output(value)
  }
  return (
    <div className="flex-row gap-small margin-top-big justify-end">
      <Pill className={`pointer ${value === FilterType.All && "active "}`} onClick={() => handleFilter(FilterType.All)}>Todos</Pill>
      <Pill className={`pointer ${value === FilterType.IN_PROGRESS && "active "}`}onClick={() => handleFilter(FilterType.IN_PROGRESS)}>En proceso</Pill>
      <Pill className={`pointer ${value === FilterType.DONE && "active "}`} onClick={() => handleFilter(FilterType.DONE)}>Completadas</Pill>
      <Pill className={`pointer ${value === FilterType.PENDING && "active "}`} onClick={() => handleFilter(FilterType.PENDING)}>Pendientes</Pill>
    </div>
  );
};

export default Filter;

export { FilterType };