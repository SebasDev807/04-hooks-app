import { useEffect, useState } from "react";
import type { Task } from "../interfaces/Task";

const TASKS_STORAGE_KEY = 'tasks';

export const useTask = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        //Estado inicial del useState, en este caso es un callback que retorna los valores almacenados en el localStorage
            const savedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
            return savedTasks ? JSON.parse(savedTasks) : [];
    });
    
    const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

    useEffect(() => {

        if (tasks.length > 0 || localStorage.getItem(TASKS_STORAGE_KEY) !== null) {
            localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
        }
        
    }, [tasks]);

    const handleOpenForm = () => setIsTaskFormOpen(true);
    const handleCloseForm = () => setIsTaskFormOpen(false);

    const addTask = (task: Task) => {
        setTasks(prev => [...prev, task]);
    }

    const toggleTask = (idTask: number) => {
        setTasks(prev => prev.map(task =>
            task.idTask === idTask ? { ...task, completed: !task.completed } : task
        ));
    }

    const removeTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.idTask !== id));
    }

    return {
        handleOpenForm,
        handleCloseForm,
        addTask,
        toggleTask,
        removeTask,
        isTaskFormOpen,
        tasks
    }
}