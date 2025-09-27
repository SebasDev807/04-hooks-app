import { CircleX } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import type { ITaskForm, Task } from '../interfaces/Task';
import { generateId } from '../utils/generate-id';


const formData: ITaskForm = {
    taskTitle: "",
    description: ""
}

interface Props {
    handleCloseModal: () => void;
    handleAddTask: (task: Task) => void;
    isTaskFormOpen: boolean;
}


export const TaskForm = ({ handleCloseModal, handleAddTask }: Props) => {


    const onSubmit = (data: ITaskForm) => {
        try {
            //Se esparcen el resto de propiedades que son default, manteniendo el tipado del formulario
            const newTask: Task = { completed: false, idTask: generateId(), ...data }
            handleAddTask(newTask)
            handleCloseModal();
        } catch (error) {
            alert('No se pudo crear la tarea');
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: formData });

    return (
        <>
            {/* Fondo oscuro suave */}
            <div className="fixed inset-0 bg-black/70 z-40"></div>

            {/* Contenedor del modal */}
            <form className={`fixed inset-0 flex items-center justify-center z-50 animate__animated animate__faster animate__bounceIn`}
                onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-5">

                    <div className='flex items-center justify-between'>
                        <h2 className="text-xl text-center font-semibold text-emerald-600">
                            Agregar Tarea
                        </h2>
                        <button
                            onClick={handleCloseModal}
                            className='cursor-pointer text-red-700 hover:text-red-600 transition'>
                            <CircleX />
                        </button>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-emerald-500 font-medium">Titulo de la tarea:</label>
                        <input type="text" className="font-light p-1 border-1 border-emerald-500 rounded-lg placeholder-gray-500 text-white"
                            placeholder="Ej: Tterminar estudios "
                            {...register("taskTitle", {
                                required: "El Titulo es obligatorio"
                            })}
                        />
                        {errors.taskTitle && <ErrorMessage>{errors.taskTitle.message}</ErrorMessage>}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-emerald-500 font-medium">Descripción:</label>
                        <textarea
                            placeholder="Opcional..."
                            className="font-light p-1 border-1 border-emerald-500 rounded-lg  placeholder-gray-500 text-white" rows={5}
                            {...register('description')}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Agregar tarea"
                        className="w-full bg-emerald-500 cursor-pointer hover:bg-emerald-600 transition p-2 rounded-lg"
                    />


                </div>
            </form>
        </>

    );
};
