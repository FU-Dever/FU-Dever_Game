import React from "react";

const optionData = [
    "./assets/images/deer.png",
    "./assets/images/crab.png",
    "./assets/images/fish.png",
    "./assets/images/shrimp.png",
    "./assets/images/cook.png",
    "./assets/images/calabash.png",
]

export default class BingoPopUp extends React.Component{

    constructor(props){
        super(props)
    }

    close(){
        this.props.close()
    }

    render(){
        return(
            <div id="wrap-pop-up">
                <div id="pop-up">
                    <div id="pop-up-img">
                        <img src="./assets/images/pop_up.jpg" alt="pop_up"/>
                    </div>
                    <div id="wrap-spined">
                        <img className="spinned-block" src={optionData[this.props.data[0]]} alt="image"/>
                        <img className="spinned-block" src={optionData[this.props.data[1]]} alt="image"/>
                        <img className="spinned-block" src={optionData[this.props.data[2]]} alt="image"/>
                    </div>
                    <h2 id="pop-up-title">Chúc mừng</h2>

                    <svg onClick={()=>this.close()} id="pop-up-close-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </div>
            </div>
        )
    }
}