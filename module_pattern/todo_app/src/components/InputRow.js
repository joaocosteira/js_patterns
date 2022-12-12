import { useState } from "react";
import Input from './Input'
import Button from './Button'

const InputRow = ({ addTodoItem }) => {

    const [input,setInput] = useState('')

    const addTodo = () => {
        addTodoItem(input);
        setInput('')
    }

    return(
        <form>
            <Input 
                value={input}
                onChange={({target}) => setInput(target.value)}
            />
            <Button
                onClick={addTodo}
                color="primary"
                varient="outlined"
            >
                Add Item
            </Button>
        </form>
    )
}

export default InputRow;