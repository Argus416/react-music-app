import { useState } from "react";
// Stlye
import "./styles/app.scss";
// Components
import Player from "./components/Player";
import Song from "./components/Song";
// Data
import data from "./util.js";
function App() {
    const [songs, setsongs] = useState(data());
    const [currentSong, setcurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
        </div>
    );
}

export default App;
