import React from "react";

export default class CountDown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sec: 15,
        }
    }


    componentDidMount(){
       this.countDown()
       this.checkTime()
    }

    checkTime(){
        let counter = 0
        setInterval(() => {
            if(counter===15){
                this.props.stopCountDown()
            }
            counter += 1;
        }, 1000);
    }

    countDown(){
        setInterval(() => {
            this.setState({
                sec: this.state.sec - 1
            })
        }, 1000);
    }

    render(){
        return(
            <>
                <h2 id="countdown">{this.state.sec}</h2>
            </>
        )
    }
}