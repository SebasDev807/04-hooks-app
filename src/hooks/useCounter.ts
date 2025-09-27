import { useState } from "react"

export const useCounter = (initialState = 0) => {

    const [count, setCount] = useState(initialState);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count <= 0) return;
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(initialState);
    }

    return {
        count,
        handleDecrement,
        handleReset,
        handleIncrement
    }
}