import React from "react";
// import AudioPlayer from 'react-audio-element';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default class Cheer extends React.Component {
    render() {
        return (
            <>
                <AudioPlayer className="hide-audio-bar"
                    autoPlay
                    src="./Audio/wow.mp3"
                />
            </>
        );
    }
}