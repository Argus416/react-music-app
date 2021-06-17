const LibrarySong = ({ id, song, songs, currentSong, setcurrentSong }) => {
    const songSelectorHandler = () => {
        setcurrentSong((currentSong.active = false));
        setcurrentSong(song, (song.active = true));
    };

    return (
        <div onClick={songSelectorHandler} className={`library-song ${song.active ? "selected" : ""}`}>
            <img src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
