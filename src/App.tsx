import Filter, { FilterType } from "./core/components/filter/filter";
import { Itask, ItaskFirebase, Task } from "./core/lib/task";
import Category from "./core/components/category/category";
import { collection, getDocs } from "firebase/firestore";
import { useStore } from "./core/lib/taskContext";
import Footer from "./core/layout/footer/footer";
import Header from "./core/layout/header/header";
import Form from "./core/components/form/form";
import { useEffect, useState } from "react";
import { db } from "./core/lib/firebase";
import Card from "./core/ui/card/card";
import "./App.css";

function App() {
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const store = useStore((state) => state);
  /* Load Data First time n save on store */
  useEffect(() => {
    (async () => {
      const fireDate: Itask[] = []
      const ref = collection(db, "tasks");
      const docs = await getDocs(ref);
      docs.forEach((doc) => {
        const data = doc.data() as ItaskFirebase
        fireDate.push({...data, createdAt: data.createdAt.toDate().toISOString(), id: doc.id})
      })
      const tasksList = fireDate.map((task) => {
        const myTask = new Task()
        myTask.load(task)
        return myTask
      })
      store.loadTasks(tasksList ?? [])
    })()
  }, []);
  return (
    <section className="main-layout">
      <Header />
      <main className="margin-auto padding-standard size-full flex-column gap-big">
        <Card>
          <div>
            <h1>Gestión de Tareas</h1>
            <p>Todas las tareas en un solo lugar</p>
          </div>
          <Form data-testid="task-input-form"/>
          <Filter output={(value) => setFilter(value)}/>
        </Card>
        {filter === FilterType.All && (<Category data={store.tasks}/> )}
        {filter === FilterType.IN_PROGRESS && (<Category category={FilterType.IN_PROGRESS} data={store.tasks.filter(item => item.get().status.includes(FilterType.IN_PROGRESS))}/> )}
        {filter === FilterType.DONE && (<Category category={FilterType.DONE} data={store.tasks.filter(item => item.get().status.includes(FilterType.DONE))}/> )}
      </main>
      <Footer />
    </section>
  );
}

export default App;
