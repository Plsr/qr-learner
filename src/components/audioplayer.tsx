"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  audioSrc: string;
};

export const AudioPlayer = ({ audioSrc }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    audioElement.addEventListener("ended", handlePlaybackEnded);

    return () => audioElement.removeEventListener("ended", handlePlaybackEnded);
  }, []);

  const handlePlaybackEnded = () => {
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    if (!audioRef.current) {
      return;
    }

    setIsPlaying(true);

    audioRef.current.play();
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support this
      </audio>
      <button onClick={handlePlayClick}>
        <div className="rounded-full text-purple-800 p-4 bg-purple-500">
          {isPlaying ? (
            <Pause className="w-12 h-12" />
          ) : (
            <Play className="w-12 h-12" />
          )}
        </div>
      </button>
    </>
  );
};
