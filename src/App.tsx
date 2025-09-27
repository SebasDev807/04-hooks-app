import { Route, Routes, Navigate } from "react-router";
import { Ejercicio_1, Ejercicio_2 } from "./ejercicios";

export default function App() {
  
  return (
    <Routes>
      <Route path="/exercise_1" element={<Ejercicio_1 />} />
      <Route path="/exercise_2" element={<Ejercicio_2 />} />
      <Route path="/" element={<Navigate to="/exercise_1" />} />
    </Routes>
  )
}
