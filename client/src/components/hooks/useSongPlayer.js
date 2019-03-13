import { useState, useEffect } from 'react';

function useSongPlayer(audioElement) {
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [clickedTime, setClickedTime] = useState();
  const [volume, setVolume] = useState();

  useEffect(() => {
    const audioEl = audioElement.current;

    const setAudioData = () => {
      setDuration(audioEl.duration);
      setCurrentTime(audioEl.currentTime);
      setVolume(audioEl.volume);
    };

    // Handle progress
    const setAudioTime = () => setCurrentTime(audioEl.currentTime);

    // Handle volume
    //const setVolume = () => setVolume(audioEl.volume);

    audioEl.addEventListener('loadeddata', setAudioData);
    audioEl.addEventListener('timeupdate', setAudioTime);
    audioEl.addEventListener('onvolumechange', setAudioData);

    playing ? audioEl.play() : audioEl.pause();

    if (volume) audioEl.volume = volume;

    if (clickedTime && clickedTime !== currentTime) {
      audioEl.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audioEl.removeEventListener('loadeddata', setAudioData);
      audioEl.removeEventListener('timeupdate', setAudioTime);
      audioEl.removeEventListener('onvolumechange', setAudioData);
    };
  });

  return [
    currentTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    volume,
    setVolume
  ];
}
export default useSongPlayer;
