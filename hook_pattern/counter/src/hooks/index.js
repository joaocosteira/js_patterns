import { useEffect, useState } from "react"

export const useCounter = () => {

    const [counter,setCounter] = useState(0);

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return { counter, increment, decrement }

}

export const useWidth = () => {

    const [width,setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleSize)

        return () => window.removeEventListener('resize',handleSize)
    }, [])

    return width;
}