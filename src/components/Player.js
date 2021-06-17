import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
const Player = ({ songs, currentSong, setcurrentSong, isPlaying, setIsPlaying }) => {
    //Ref
    const audioRef = useRef(null);

    // State
    const [songInfo, setsongInfo] = useState({
        currentTime: 0,
        endTime: 0,
        duration: 0,
    });
    // Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const musicTimeHandler = (e) => {
        const currentTime = e.target.currentTime;
        const endTime = e.target.duration - e.target.currentTime;
        const duration = e.target.duration;

        setsongInfo({ ...songInfo, currentTime, endTime, duration });
    };

    const getTime = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setsongInfo({ ...songInfo, currentTime: e.target.value });
    };
    const autoPlayHandler = () => {
        if (isPlaying) {
            // setcurrentSong((currentSong.active = false));
            audioRef.current.play();
        }
    };

    const skipTrackHandler = (direction) => {
        const songIndex = songs.findIndex((song) => currentSong.id === song.id);
        if (songIndex <= songs.length || songIndex >= 0) {
            songs[songIndex].active = false;
            if (direction === "skip-back") {
                if ((songIndex - 1) % songs.length === -1) {
                    setcurrentSong(songs[songs.length - 1]);
                    songs[songs.length - 1].active = true;
                    return;
                }
                setcurrentSong(songs[(songIndex - 1) % songs.length]);
                songs[(songIndex - 1) % songs.length].active = true;
            }
            if (direction === "skip-forward") {
                setcurrentSong((currentSong.active = false));
                setcurrentSong(songs[(songIndex + 1) % songs.length]);
                songs[(songIndex + 1) % songs.length].active = true;
            }
        }
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime) || "0:00"}</p>
                <input
                    type="range"
                    min={0}
                    max={songInfo.duration || "0:00"}
                    onChange={dragHandler}
                    value={songInfo.currentTime}
                />
                <p>{getTime(songInfo.endTime) || "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>

            <audio
                onLoadedData={autoPlayHandler}
                onLoadedMetadata={musicTimeHandler}
                onTimeUpdate={musicTimeHandler}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </div>
    );
};

export default Player;
