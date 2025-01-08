import { Check, Clock, Search } from "lucide-react";
import Footer from "./core/layout/footer/footer";
import Header from "./core/layout/header/header";
import Button from "./core/ui/button/button";
import Input from "./core/ui/input/input";
import Card from "./core/ui/card/card";
import "./App.css";

function App() {
  return (
    <section className="main-layout">
      <Header />
      <main className="margin-auto padding-standard size-full flex-column gap-big">
        <Card>
          <div>
            <h1>Gestión de Tareas</h1>
            <p>Todas las tareas en un solo lugar</p>
          </div>
          <div className="flex-row gap-small margin-top-big flex-center">
            <Input className="size-full-width" value="" type="text" placeholder="Buscar tarea" onChange={() => {}}>
              <Search height={16} color="#343434"/>
            </Input>
            <Button className="size-full-height">
              <p>Añadir</p>
            </Button>
          </div>
        </Card>
        <Card>
          <h2 className="text-blue flex-row aling-center gap-small">
            <Clock />
            En proceso
          </h2>
        </Card>
        <Card>
          <h2 className="text-green flex-row aling-center gap-small">
            <Check />
            Completadas
          </h2>
        </Card>
      </main>
      <Footer />
    </section>
  );
}

export default App;
