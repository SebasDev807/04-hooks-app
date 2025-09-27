import type { Task } from "../interfaces/Task";
import { TaskCard } from "./TaskCard";

interface Props {
    tasks: Task[];
    handleToggleTask: (id: number) => void;
    handleDeleteTask: (id: number) => void;
}



export const TaskList = ({ tasks, handleToggleTask, handleDeleteTask }: Props) => {
    return (
        <div className="mt-2">


            {tasks.length === 0 && <p className="text-xl text-gray-700 text-center">No hay tareas pendientes...</p>}


            <ul className="md:grid md:grid-cols-3 flex flex-col gap-10">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.idTask}
                        {...task}
                        onToggleTask={() => handleToggleTask(task.idTask)}
                        handleDeleteTask={() => handleDeleteTask(task.idTask)}
                    />
                ))}
            </ul>
        </div>
    );
};
