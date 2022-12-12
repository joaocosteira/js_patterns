import React from "react";
import { Mutation } from '@apollo/client/react/components'
import { ADD_MESSAGE } from "./resolvers";

class InputRenderProp extends React.Component{

    constructor(){
        super();
        this.state = {
            message: ""
        }
    }


    handleChange = ({ target }) => { this.setState({ message: target.value }) }

    render(){
        return(
            <Mutation
                mutation={ADD_MESSAGE}
                variables={{ message: this.state.message }}
                onCompleted={() => {
                    console.log(`Added with render prop: ${this.state.message} `)
                    this.setState({ message: '' })
                }
                    
                }
            >
                {(addMessage) => (
                <div className="input-row">
                    <input
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Type something..."
                    value={this.state.message}
                    />
                    <button onClick={addMessage}>Add</button>
                </div>
                )}
            </Mutation>
        )
    }

}


export default InputRenderProp;