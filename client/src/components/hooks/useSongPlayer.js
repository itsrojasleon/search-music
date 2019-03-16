import { useState, useEffect } from 'react';

function useSongPlayer(audioElement) {
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState();
  // Time
  const [currentTime, setCurrentTime] = useState();
  const [clickedTime, setClickedTime] = useState();
  // Volume
  const [currentVolume, setCurrentVolume] = useState();
  const [clickedVolume, setClickedVolume] = useState();
  const [resetVolume, setResetVolume] = useState(false);

  useEffect(() => {
    const audioEl = audioElement.current;

    const setAudioData = () => {
      setDuration(audioEl.duration);
      setCurrentTime(audioEl.currentTime);
      setCurrentVolume(audioEl.volume);
    };

    const setAudioTime = () => {
      if (resetVolume) {
        audioEl.volume = 0;
      } else {
        audioEl.volume = 1;
      }
      setCurrentTime(audioEl.currentTime);
    };

    const setVolume = () => {
      setCurrentVolume(audioEl.volume);
    };

    audioEl.addEventListener('loadeddata', setAudioData);
    audioEl.addEventListener('timeupdate', setAudioTime);
    audioEl.addEventListener('volumechange', setVolume);

    playing ? audioEl.play() : audioEl.pause();

    if (clickedTime && clickedTime !== currentTime) {
      // update currentTime value
      audioEl.currentTime = clickedTime;
      setClickedTime(null);
    }
    // Volume
    if (clickedVolume && clickedVolume !== currentVolume) {
      // Update volume value
      audioEl.volume = clickedVolume;
      setClickedVolume(null);
    }

    // effect cleanup
    return () => {
      audioEl.removeEventListener('loadeddata', setAudioData);
      audioEl.removeEventListener('timeupdate', setAudioTime);
      audioEl.removeEventListener('volumechange', setVolume);
    };
  });

  return [
    currentTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    setClickedVolume,
    currentVolume,
    setResetVolume
  ];
}
export default useSongPlayer;
