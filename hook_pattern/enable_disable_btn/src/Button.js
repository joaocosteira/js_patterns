import React from "react";


class Button extends React.Component{
    
    constructor(){
        super();
        this.state = { enabled: false}
    }

    render(){

        const { enabled } = this.state;
        const btnText = enabled ? "enabled" : "disabled";


        return(
            <div
                className={`btn enabled-${enabled}`}
                onClick={() => this.setState({ enabled: !enabled })}
            >
                {btnText}
            </div>
        )

    }

}

export default Button;