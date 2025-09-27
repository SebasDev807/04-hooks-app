import { Trash2, } from "lucide-react";
import type { Task } from "../interfaces/Task";


interface Props extends Task {
    onToggleTask: () => void;
    handleDeleteTask: () => void;
}

export const TaskCard = ({
    completed,
    taskTitle,
    description = '',
    onToggleTask,
    handleDeleteTask
}: Props) => {


    return (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl md:w-140 w-100 animate__animated animate__bounceIn animate__faster ">

            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-emerald-400 ">{taskTitle}</h3>

            </div>

            <p className="text-slate-300 mb-4">{description}</p>


            <div className="flex items-center justify-between">
                <button
                    onClick={onToggleTask}
                    className={`px-3 py-1 rounded-full cursor-pointer hover:opacity-70 text-sm font-medium  ${completed
                        ? "bg-emerald-600/20 text-emerald-400 border border-emerald-600/40"
                        : "bg-red-600/20 text-red-400 border border-red-600/40"}`}
                >
                    {completed ? "✔ Completada" : "✘ No completada"}
                </button>
                <button
                    onClick={handleDeleteTask}
                    className="bg-red-500 p-2 text-white rounded-full cursor-pointer hover:opacity-80 transition">
                    <Trash2 />
                </button>
            </div>


        </div>

    )
}
