import LibrarySong from "./LibrarySong";
const Library = ({ songs, currentSong, setcurrentSong, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        id={song.id}
                        key={song.id}
                        currentSong={currentSong}
                        song={song}
                        songs={songs}
                        setcurrentSong={setcurrentSong}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
