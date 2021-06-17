import { useState } from "react";
// Stlye
import "./styles/app.scss";
// Components
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Data
import data from "./util.js";
function App() {
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [songs, setsongs] = useState(data());
    const [currentSong, setcurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="App">
            <Navbar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

            <Song currentSong={currentSong} />

            <Player
                songs={songs}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setcurrentSong={setcurrentSong}
            />

            <Library
                libraryStatus={libraryStatus}
                currentSong={currentSong}
                setcurrentSong={setcurrentSong}
                songs={songs}
            />
        </div>
    );
}

export default App;
