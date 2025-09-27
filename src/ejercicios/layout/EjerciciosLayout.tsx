import type React from "react"
import { Navbar } from "../../components"


interface Props {
    children: React.ReactNode;
    title?: string;
}

export const EjerciciosLayout = ({ children, title = '' }: Props) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Navbar />

            <h1 className="text-4xl text-center text-emerald-500 font-semibold mt-6">
                {title}
            </h1>

            <div className="flex-grow flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

