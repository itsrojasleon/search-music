import { useState, useEffect } from 'react';

function useSongPlayer(audioElement) {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audioEl = audioElement.current;

    const setAudioData = () => {
      setDuration(audioEl.duration);
      setCurrentTime(audioEl.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audioEl.currentTime);

    audioEl.addEventListener('loadeddata', setAudioData);
    audioEl.addEventListener('timeupdate', setAudioTime);

    // playing ? audioEl.play() : audioEl.pause();

    if (clickedTime && clickedTime !== currentTime) {
      audioEl.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audioEl.removeEventListener('loadeddata', setAudioData);
      audioEl.removeEventListener('timeupdate', setAudioTime);
    };
  });

  return [currentTime, duration, playing, setPlaying, setClickedTime];
}
export default useSongPlayer;
