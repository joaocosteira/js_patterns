import { useEffect, useState } from "react"

export const useKeyPress = (targetKey) => {

    const [keyPressed, setKeyPressed] = useState(false)


    const handleDown = ({ key }) => key === targetKey && setKeyPressed(true)

    useEffect(() => {
        window.addEventListener('keydown',handleDown)
        return () => {
            window.removeEventListener('keydown',handleDown)
         }
    }, [])

    return keyPressed;
}