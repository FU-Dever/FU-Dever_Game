import React from "react";

export default class Options extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-options">
                    <div className="option">
                        <img src="./assets/images/deer.png" alt="option"/>
                    </div>
                    <div className="option">
                        <img src="./assets/images/crab.jpg" alt="option"/>
                    </div>
                    <div className="option">
                        <img src="./assets/images/fish.png" alt="option"/>
                    </div>
                    <div className="option">
                        <img src="./assets/images/shrimp.png" alt="option"/>
                    </div>
                    <div className="option">
                        <img src="./assets/images/cook.png" alt="option"/>
                    </div>
                    <div className="option">
                        <img src="./assets/images/calabash.png" alt="option"/>
                    </div>
                </div>
            </>
        );
    }
}