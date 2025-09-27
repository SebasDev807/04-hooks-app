import { TaskList } from "../../components/TaskList";
import { EjerciciosLayout } from "../layout/EjerciciosLayout";
import { TaskForm } from "../../components/TaskForm";
import { useTask } from "../../hooks/useTasks";


export default function Ejercicio_2() {

    const {
        addTask,
        handleCloseForm,
        handleOpenForm,
        removeTask,
        tasks,
        toggleTask,
        isTaskFormOpen
    } = useTask();

    return (
        <EjerciciosLayout title="Ejercicio 2 - Tasks">
            <main>
                <TaskList
                    handleToggleTask={toggleTask}
                    handleDeleteTask={removeTask}
                    tasks={tasks} />
            </main>


            <div className="fixed bottom-25 right-25 z-30">

                <button
                    onClick={handleOpenForm}
                    className="bg-emerald-500 p-5 rounded-full h-15 w-15 text-2xl font-bold text-white flex items-center justify-center cursor-pointer hover:opacity-90 transition fixed">
                    +
                </button>
            </div>

            {isTaskFormOpen && <TaskForm
                handleCloseModal={handleCloseForm}
                handleAddTask={addTask}
                isTaskFormOpen
            />}

        </EjerciciosLayout>
    )
}
