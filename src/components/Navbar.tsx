import { Link } from "react-router"

export const Navbar = () => {
    return (

        <header className="bg-violet-950 p-5 flex justify-between shadow-2xl">
            <h1 className="text-white font-medium shadow-2xl">
                Ejercicios Guia 4
            </h1>

            <nav className="space-x-3">
                <Link
                    className="text-[15px] text-emerald-500 font-medium hover:text-emerald-600 transition cursor-pointer "
                    to="/exercise_1">Ejercicio 1
                </Link>
                <Link
                    className="text-[15px] text-emerald-500 font-medium hover:text-emerald-600 transition cursor-pointer "
                    to="/exercise_2">
                    Ejercicio 2
                </Link>
            </nav>
        </header>
    )
}
