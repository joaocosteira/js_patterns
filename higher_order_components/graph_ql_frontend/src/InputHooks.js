import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_MESSAGE } from "./resolvers";

export default function Input(){

    const [message,setMessage] = useState('');
    const [addMessage] = useMutation(ADD_MESSAGE,{
        variables : { message }
    })

    return(
        <div className="input-row">
            <input
                onChange={({target}) => setMessage(target.value)}
                type='text'
                placeholder="Type Something..."
            />
            <button onClick={addMessage}>Add</button>
        </div>
    )
}