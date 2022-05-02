import React, { useState, useRef } from "react";
import "./AudioPlayer.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function AudioPlayer(props) {
  // console.log(props.audio.phonetics);
  const [isPlaying, setPlaying] = useState(false);
  const audioPlay = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);
    if (!prevValue) {
      audioPlay.current.play();
    } else {
      audioPlay.current.pause();
    }
  };
  if (props.phonetic2.audio) {
    return (
      <div>
        <audio
          ref={audioPlay}
          src={props.phonetic2.audio}
          preload="metadata"
        ></audio>
        <button onClick={togglePlayPause} className="btn btn-light playPause">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    );
  } else {
    return null;
  }
}
