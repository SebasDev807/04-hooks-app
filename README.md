# Guía 04: Custom Hooks y Props

**Autor:** Juan Sebastián Astudillo Ordóñez
**Carrera:** Tecnología en Desarrollo de Software

Esta guía tiene como objetivo enseñar el uso de **Custom Hooks** y **Props** en React, aplicando buenas prácticas en proyectos con herramientas visuales de programación. Incluye ejercicios prácticos que combinan hooks personalizados, manejo de estado, persistencia en `localStorage` y navegación con `React Router`.

---

## Inicialización del proyecto

1. Clonar el repositorio:

```bash
git clone <url-del-repo>
cd <nombre-del-repo>
```

2. Instalar dependencias con pnpm:

```bash
pnpm install
```

3. Ejecutar el proyecto en modo desarrollo:

```bash
pnpm dev
```

El proyecto se abrirá en `http://localhost:5173` (o el puerto que indique la terminal).

---

## Ejercicio 1: Contador con `useCounter`

**Descripción:**
Crear un contador que utiliza un **custom hook** llamado `useCounter`. El contador puede:

* Incrementar
* Decrementar
* Reiniciarse

**Props:**

* `initialValue` (number): valor inicial del contador.

**Objetivos de aprendizaje:**

* Uso de **Props** para inicializar componentes.
* Creación de **Custom Hooks**.
* Manejo de estado local con `useState`.

**Ejemplo de uso:**

```tsx
const { counter, increment, decrement, reset } = useCounter({ initialValue: 0 });
```

---

## Ejercicio 2: Task List con `useTasks`

**Descripción:**
Crear una lista de tareas que permita:

* Agregar nuevas tareas.
* Marcar tareas como completadas o no completadas.
* Eliminar tareas.
* Persistir tareas en `localStorage`.
* Navegar entre ejercicios usando **React Router**.

**Componentes principales:**

* `TaskList`: lista de tareas con sus acciones.
* `TaskForm`: formulario para agregar nuevas tareas.
* `useTasks`: custom hook para manejar el estado de las tareas y la persistencia en `localStorage`.

**Objetivos de aprendizaje:**

* Manejo avanzado de **Custom Hooks**.
* Comunicación entre componentes mediante **Props**.
* Persistencia de datos en `localStorage`.
* Navegación entre rutas con **React Router**.

**Ejemplo de uso:**

```tsx
const {
  tasks,
  addTask,
  removeTask,
  toggleTask,
  isTaskFormOpen,
  handleOpenForm,
  handleCloseForm
} = useTasks();
```

---

## Navegación entre ejercicios

Se utiliza **React Router** para navegar entre los ejercicios:

```tsx
<Routes>
  <Route path="/ejercicio-1" element={<Ejercicio1 />} />
  <Route path="/ejercicio-2" element={<Ejercicio2 />} />
</Routes>
```

* `/ejercicio-1` → Contador (`useCounter`)
* `/ejercicio-2` → Task List (`useTasks`)

---

## Recomendaciones

* Revisar los custom hooks y entender cómo funcionan antes de modificar los ejercicios.
* Observar cómo se pasan **Props** desde los componentes padres a los hijos.
* Probar la persistencia en `localStorage` cerrando y reabriendo el navegador.
* Mantener un diseño limpio y ordenado usando Tailwind CSS o la librería de estilos que prefieras.

---

**Fin de la guía 04**
