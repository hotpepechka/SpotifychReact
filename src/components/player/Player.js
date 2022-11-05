import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {useState} from "react";
import './Player.css'
import React from "react";

function Player(props){

    const[trackIndex, setTrackIndex] = useState(0);

    const handleClickPrevious = () => {         //пред трек
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? props.musicTrack.length - 1 : currentTrack - 1
        );
    };
    const handleClickNext = () => {         //след трек
        setTrackIndex((currentTrack) =>
            currentTrack < props.musicTrack.length - 1 ? currentTrack + 1 : 0
        );
    };


    return(
        <body className='Player-body'>
            <div className='audio-player'>
                <AudioPlayer
                    src={props.musicTrack[trackIndex].src}
                    onPlay={(e) => console.log('onPlay')}
                    header={`Now playing: ${props.musicTrack[trackIndex].artist} - ${props.musicTrack[trackIndex].name}`}
                    showSkipControls={true}
                    showJumpControls={false}
                    onClickNext={handleClickNext}
                    onClickPrevious={handleClickPrevious}
                    onEnded={handleClickNext}
                />
            </div>
        </body>
    );
}

export default Player;