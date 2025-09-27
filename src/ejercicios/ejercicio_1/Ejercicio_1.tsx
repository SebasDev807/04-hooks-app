import { useCounter } from "../../hooks/useCounter";
import { EjerciciosLayout } from "../layout/EjerciciosLayout";

export default function Ejercicio_1() {

    const {
        handleDecrement,
        handleReset,
        handleIncrement,
        count
    } = useCounter(1);

    return (

        <EjerciciosLayout title="Ejercicio 1 - Contador">


            <main className="flex flex-col items-center justify-center animate__animated animate__bounceIn animate__faster">
                <h2 className="text-4xl text-center mb-10 bg-slate-700 text-emerald-600 h-20 w-20 flex items-center justify-center rounded-xl shadow-2xl">
                    {count}
                </h2>

                <div className="flex gap-2 ">
                    <button
                        onClick={handleIncrement}
                        className="bg-purple-700 w-20 rounded-lg hover:bg-purple-800 transition-colors cursor-pointer h-10 text-xl">
                        +
                    </button>

                    <button
                        onClick={handleReset}
                        className="bg-emerald-600 px-4 rounded-lg text-purple-800 hover:opacity-90 transition-opacity h-10 text-xl cursor-pointer">
                        reset
                    </button>

                    <button
                        onClick={handleDecrement}
                        className="bg-purple-700 w-20 rounded-lg hover:bg-purple-800 transition-colors cursor-pointer h-10 text-xl">
                        -
                    </button>
                </div>
            </main>
        </EjerciciosLayout>

    )
}
