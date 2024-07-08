import {Box} from "@chakra-ui/react";
import { useState } from "react";
import { Howl } from "howler";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import PlayBox from "./components/PlayBox";

const song = [
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    playingCount: 1040811084,
    time: "4:53",
    album: "Thriller 25 Super Deluxe Edition",
    src: "/songs/Billie jean.mp3",
    image: "/michael-jackson.jpg",
  },
  {
    title: "Beat It",
    artist: "Michael Jackson",
    playingCount: 643786045,
    time: "4:18",
    album: "Thriller 25 Super Deluxe Edition",
    src: "/songs/Beat it.mp3",
    image: "/michael-jackson.jpg",
  },
  {
    title: "Smooth Criminal - 2012 Remaster",
    artist: "Michael Jackson",
    playingCount: 407234004,
    time: "4:17",
    album: "Thriller 25 Super Deluxe Edition",
    src: "/songs/Smooth Criminal Remastered.mp3",
    image: "/michael-jackson.jpg",
  },
  {
    title: "Don't Stop Til You Get Enough",
    artist: "Michael Jackson",
    playingCount: 316391952,
    time: "3:41",
    album: "Bad 25th Anniversary Edition",
    src: "/songs/Blue Eyes.mp3",
    image: "/michael-jackson.jpg",
  },
  {
    title: "Rock With You - Single Version",
    artist: "Michael Jackson",
    playingCount: 268187218,
    time: "4:18",
    album: "Off The Wall",
    src: "/songs/Desi Kalakaar.mp3",
    image: "/michael-jackson.jpg",
  },
];

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [songs, setsongs] = useState(song);

  const playSong = (song, index) => {
    if (currentSong) {
      currentSong.howl.stop();
    }

    const howl = new Howl({
      src: [song.src],
      html5: true,
      onplay: () => {
        setProgress(0);
        setDuration(howl.duration());
      },
      onend: () => {
        setCurrentSong(null);
        setCurrentSongIndex(null);
      },
    });

    howl.play();
    setCurrentSong({ ...song, howl });
    setCurrentSongIndex(index);
  };

  const pauseSong = () => {
    if (currentSong) {
      currentSong.howl.pause();
    }
  };

  const resumeSong = () => {
    if (currentSong) {
      currentSong.howl.play();
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(songs[nextIndex], nextIndex);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(songs[prevIndex], prevIndex);
  };

  const stopSong = () => {
    if (currentSong) {
      currentSong.howl.stop();
      setCurrentSong(null);
      setCurrentSongIndex(null);
    }
  };

  const handleSliderChange = (value) => {
    if (currentSong) {
      const seekTime = (value / 100) * currentSong.howl.duration();
      currentSong.howl.seek(seekTime);
      setProgress(value);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (value) => {
    setIsDragging(false);
    handleSliderChange(value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Box display="flex" style={{ height: "100vh" }}>
      <Sidebar />

      <Box
        flex="1"
        maxWidth="60%"
        bgGradient="linear(to-b, #4b0101, #140c0c)"
        color="white"
        overflow={"scroll"}
        sx={{
          "::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        
        <Main
          playSong={playSong}
          currentSongIndex={currentSongIndex}
          songs={songs}
          setsongs={setsongs}
        />
      </Box>

      <Box
        flex="1"
        maxWidth="20%"
        p={8}
        color="white"
        bgGradient="linear(to-b, #270909, #140c0c)"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        {currentSong && (
          <PlayBox
            currentSong={currentSong}
            isDragging={isDragging}
            setProgress={setProgress}
            setDuration={setDuration}
            formatTime={formatTime}
            duration={duration}
            progress={progress}
            handleDragEnd={handleDragEnd}
            handleDragStart={handleDragStart}
            pauseSong={pauseSong}
            resumeSong={resumeSong}
            nextSong={nextSong}
            prevSong={prevSong}
          />
        )}
      </Box>
    </Box>
  );
};

export default App;
