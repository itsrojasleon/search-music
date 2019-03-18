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
  const [resetVolume, setResetVolume] = useState();
  const [lastVolume, setLastVolume] = useState();

  useEffect(() => {
    const audioEl = audioElement.current;

    const setAudioData = () => {
      setDuration(audioEl.duration);
      setCurrentTime(audioEl.currentTime);
      setCurrentVolume(audioEl.volume);
    };

    const setAudioTime = () => {
      setCurrentTime(audioEl.currentTime);
    };

    const setVolume = () => {
      setCurrentVolume(audioEl.volume);
    };

    audioEl.addEventListener('loadeddata', setAudioData);
    audioEl.addEventListener('timeupdate', setAudioTime);
    audioEl.addEventListener('volumechange', setVolume);

    // Play or pause the song
    playing ? audioEl.play() : audioEl.pause();

    // When the people clicks BarProgress and get the value
    if (clickedTime && clickedTime !== currentTime) {
      // update currentTime value
      audioEl.currentTime = clickedTime;
      setClickedTime(null);
    }
    // Volume
    if (clickedVolume && clickedVolume !== currentVolume) {
      console.log(audioEl.volume);
      audioEl.volume = clickedVolume;
      console.log(audioEl.volume);
      setClickedVolume(null);
    }
    if (resetVolume) {
      if (resetVolume) {
        audioEl.volume = 0;
        setResetVolume(null);
      }
      if (resetVolume === 'no') {
        audioEl.volume = 1;
        setResetVolume(null);
      }
    }

    // Effect cleanup
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
