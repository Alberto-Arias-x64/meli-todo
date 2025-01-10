# Prueba técnica para Meli :)

Proyecto de presentación de la prueba técnica para desarrollador Frontend.

## Demo
[![demo del proyecto](https://meli-todo-production.up.railway.app/screenshot.png)](https://meli-todo-production.up.railway.app/)

## Objetivos 🎯

- Construir un módulo/aplicación de Gestión de Tareas.

- Se debe desarrollar uno o varios componentes en React que permita a los usuarios agregar y listar tareas. Debe manejar la gestión del estado para agregar tareas y mostrar una lista de las mismas. También debe incluir funcionalidades de eliminar y marcar tareas como completadas.

## Requerimientos 🪛

1. Framework y Lenguajes: Utilizar React.
2. Estado: Implementar la gestión del estado.
3. Testing: Implementar tests utilizando Jest y @testing-library/react para verificar al menos la funcionalidad de agregar tareas.
4. Buenas Prácticas: Aplicar SOLID y modularización en la escritura del código.
5. Documentación: Un README.md que explique cómo correr la aplicación y resuma las decisiones principales.

## Ejecución 🏍️
Para ejecutar el código en local se tiene que ejecutar los siguientes comandos
``` bash
git clone https://github.com/Alberto-Arias-x64/meli-todo.git
```
``` bash
cd meli-todo
```
``` bash
npm install
```
``` bash
npm run dev
```

## Metodologías y buenas practicas utilizadas 🛟

### Atomic designe
Se aplican los principios de Atomic Design para la estructuración de los componentes que se reutilizan a lo largo de la aplicación.

### Principios SOLID | Patron repository | Patron factory
Los principios SOLID me permitieron poder gestionar las tareas como instancias de objetos la cual aplica el patrón factory para crear múltiples instancias de una clase y el patrón repository para manejar los procesos CRUD para la base de datos.

### Principio DRY
Don't Repeat Yourself (DRY) es un principio el cual lo pude aplicar en la creación de los custom hooks para el manejo del estado de los Inputs de la aplicación.

### Principio KISS
Aunque en ocasiones se generan conflictos entre DRY y KISS, es importante tener criterio y tomar decisiones pragmáticas para mantener la simplicidad y la legibilidad del código, aunque en algunas ocasiones haya que repetir código en pro de la legibilidad.

### Unitary Testing
Los test me permiten hacer cambios en el código sin que afecte a otros componentes, lo que me permite mantener la cohesion del código y evitar conflictos entre componentes.

## Tecnologías utilizadas 🛠️

- React
- Typescript
- Vite
- Firebase
- Zustand
- Tempo
- Lucide-react
- Vitest/React testing library
- ESLint
- Railway

## scafolding 🪜

```
meli-todo
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public (Logos e imágenes publicas que no se compilan)
│  ├─ logo.png
│  ├─ meli.svg
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  ├─ core (Alcance global)
│  │  ├─ components (Componentes compuesto que se pueden reutilizar)
│  │  │  ├─ category
│  │  │  ├─ filter
│  │  │  ├─ form
│  │  │  └─ task
│  │  ├─ hooks (Custom hooks para evitar repetir código)
│  │  │  └─ input.ts
│  │  ├─ layout (Componentes referentes al layout)
│  │  │  ├─ footer
│  │  │  └─ header
│  │  ├─ lib (Utilidades y funciones que se pueden reutilizar)
│  │  │  ├─ firebase.ts
│  │  │  ├─ task.ts
│  │  │  └─ taskContext.ts
│  │  ├─ mock (Dummy data para trabajar en local)
│  │  │  └─ task.ts
│  │  ├─ styles (Abstracción de estilos generales)
│  │  │  ├─ actions.css
│  │  │  ├─ base.css
│  │  │  ├─ fonts.css
│  │  │  ├─ layout.css
│  │  │  ├─ normalizer.css
│  │  │  └─ text.css
│  │  └─ ui (Componentes atómicos)
│  │     ├─ button
│  │     ├─ card
│  │     ├─ input
│  │     ├─ modal
│  │     ├─ pill
│  │     └─ text-area
│  ├─ main.tsx
│  ├─ tests (Todo lo relacionado con testing)
│  │  ├─ setup.js
│  │  └─ task.test.jsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

## Test y pruebas 🧪
Realicé el desarrollo de los test con React Testing Library y Vitest, adicionalmente añadí la integración con Github actions para que se realice el test previo a la publicación.

Se realizan 3 test sencillos para el componente Task, un test básico de renderizado general de el app, un test de tipo unitario para el componente Task y un test de tipo de integración para agregar tareas en la aplicación.

![Ejemplo de test](https://meli-todo-production.up.railway.app/tests.png)

## Documentación del código 💼

Dejé algunos comentarios en el código (en ingles - buenas prácticas) que me permiten separar secciones de mi código, sin embargo no consideré necesario documentar de manera extensa cada método ya que al usar typescript se me facilita saber qué tipos de datos estoy esperando tanto de entrada como salida en cada método, además de sutilizar siempre nombres descriptivos en métodos y variables que me permiten interpretar que realiza cada función.

## Próximos pasos 🏁

- Mejoras en UX
- Filtro de texto
- Login
- Paginación
- Manejo de errores
- Persistencia de datos en local

## Experimental ⏭️

Cree un ambiente de pruebas para poder mostrar features los cuales no logre terminar **(Fechas de finalización)** con una calidad suficiente para que fueran estables pero quiero compartirlos para mostrar avances en el [Siguiente Link](https://experimental-production-02f7.up.railway.app/)

## Conclusiones 📝

La realización de este proyecto me permitió aprender y reflexionar sobre varios aspectos del desarrollo frontend:

**Perspectivas de usuario y diseño:** A lo largo del desarrollo, comprendí la importancia de considerar múltiples puntos de vista. Lo que inicialmente consideré crucial para los usuarios resultó ser diferente al explorar sus necesidades reales. Esto refuerza la importancia de realizar pruebas de usuario y recopilar feedback constantemente.

**Gestión de estado con Zustand:** Elegir Zustand como gestor de estado en lugar de opciones más tradicionales como Redux resultó beneficioso por su simplicidad y flexibilidad. Esto facilitó el desarrollo y mejoró la experiencia de mantenimiento del código.

**Uso de Tempo y manejo de fechas:** El manejo de objetos tipo fecha en Javascript suele ser algo complejo, Tempo es una herramienta eficiente para gestionar fechas, simplificando considerablemente la manipulación de datos relacionados.

**Vite y Vitest:** La elección de Vite no solo aceleró el entorno de desarrollo gracias a su rapidez, sino que también proporcionó una suite de pruebas robusta a través de Vitest, cuya sintaxis clara y sencilla facilitó la escritura y mantenimiento de tests.

**Enseñanzas de los principios de diseño:** La implementación de principios como DRY, SOLID y KISS no solo me ayudó a mantener un código limpio y estructurado, sino que también destacó los retos de equilibrar simplicidad y reutilización.

**Documentación y tipado:** Typescript es una tecnología indispensable para mi, no solo por la prevención de errores, sino también por reducir la necesidad de documentar extensamente cada método, gracias al uso de tipados claros y descriptivos.

**Desafíos enfrentados:** Integrar múltiples herramientas y bibliotecas presentó retos iniciales, especialmente en la configuración y compatibilidad. Sin embargo, superar estos desafíos fortaleció mi capacidad de resolución de problemas y adaptabilidad.

Este proyecto me permitió consolidar conocimientos técnicos y aplicar buenas prácticas, brindándome una perspectiva más amplia sobre cómo abordar problemas complejos y desarrollar soluciones escalables.
