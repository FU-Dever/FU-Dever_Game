import React from "react";

export default class Button extends React.Component{

    constructor(props){
        super(props);
    }

    click(){
        this.props.clicked()
    }

    render(){
        return(
            <div className="btn" onClick={()=>this.click()}>
                {this.props.name}
            </div>
        )
    }
}