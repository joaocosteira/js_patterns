import React from 'react';
import { ADD_MESSAGE } from './resolvers';
import { graphql } from '@apollo/client/react/hoc';

class Input extends React.Component{
 

    constructor(){
        super();
        this.state= { message: ''}
    }

    handleChange = ({ target }) => {
        this.setState({ message: target.value })
    }

    handleClick = () => {
        this.props.mutate({ variables : { message : this.state.message } })
    }

    render(){
        return(
            <div className="input-row">
                <input
                    onChange={this.handleChange}
                    type="text"
                    placeholder='Type something... '
                />
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default graphql(ADD_MESSAGE)(Input)