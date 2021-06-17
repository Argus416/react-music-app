import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //Ref
    const audioRef = useRef(null);
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
};

export default Player;