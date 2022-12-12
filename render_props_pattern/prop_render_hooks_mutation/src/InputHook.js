import { useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { ADD_MESSAGE } from "./resolvers";


const InputHook = () => {

    const [message,setMessage] = useState("")

    const [addMessage] = useMutation(ADD_MESSAGE, {
        variables: { message },
        onCompleted: () => {
            console.log(`Added with hooks ${message}`)
            setMessage('')
        }
    })
    return(
        <div className="input-row">
            <input
                onChange={({target}) => setMessage(target.value)}
                type="text"
                placeholder="Type Something..."
                value={message}
            />
            <button onClick={addMessage}>Add</button>
        </div>
    )
}

export default InputHook;