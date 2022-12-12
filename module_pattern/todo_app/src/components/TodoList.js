import { List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import InputRow from "./InputRow";
import Button from "./Button";

const TodoList = () => {

    const [todos,setTodos] = useState(["Improve JS skills 💪", "Pet dog 🐶"])

    const addTodoItem = (todo) => {
        todo.length && setTodos([...todos,todo])
    }

    const removeTodo = (i) => {
        todos.splice(i,1)
        setTodos([...todos])
    }
    return(
        <div className="todo-list">
            <h1>Todo Items</h1>
            <InputRow addTodoItem={addTodoItem} />
            <List>
                {todos.map( (todo,i) => (
                    <ListItem key={`${todo}-${i}`}>
                        <ListItemText>
                            {todo}
                        </ListItemText>
                        <Button
                            color="secondary"
                            onClick={() => removeTodo(i)}
                        >
                            Remove
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default TodoList;