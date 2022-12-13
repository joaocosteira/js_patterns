import React from 'react';
import Count from './Count';
import Width from './Width';
/**  
 * 
 * Original Version: Class Based
 */
class Counter extends React.Component{

    constructor(){
        super()
        this.state = {
            count: 0,
            width: 0
        }
    }

    componentDidMount(){
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }

    increment = () => {
        this.setState(({count}) => ({ count: count + 1 }))
    }

    decrement = () => {
        this.setState(({count}) => ({ count: count - 1 }))
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth })
    }


    render(){
        return(
            <>
                <Count
                    count = {this.state.count}
                    increment = {this.increment}
                    decrement = {this.decrement}
                />
                <div id="divider" />
                <Width width={this.state.width}/>
            </>
        )
    }

}

export default Counter;