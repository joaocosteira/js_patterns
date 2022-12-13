import { useEffect, useState } from "react";
import { useKeyPress } from "../hooks";

const Input =  () => {

    const [value,setValue] = useState('');

    const pressedQ = useKeyPress('q')
    const pressedW = useKeyPress('w')
    const pressedL = useKeyPress('l')

    useEffect(() => {
        if(pressedQ){
            console.log('You Pressed Q')
        }
    },[pressedQ])

    useEffect(() => {
        if(pressedW){
            console.log('You Pressed W')
        }
    },[pressedW])

    useEffect(() => {
        if(pressedL){
            console.log('You Pressed L')
        }
    },[pressedL])


    // useEffect(() => {
    //     console.log(`Current value: '${value}'`)
    // }, [value])

    return(
        <>
            <input
                value={value}
                onChange={({target}) => setValue(target.value)}
                placeholder="Type something..."
            />
            { value.length !== 0 &&
                <p>Currently typed: {value}</p>
            }
        </>
    )
}

export default Input;