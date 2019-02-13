import { useState, useEffect } from 'react';

function useSongs(song) {
  const [songs, setSongs] = useState([]);

  useEffect(
    () => {
      (async song => {
        if (!song) return;
        try {
          const response = await fetch(
            `https://spotify-demo-api.now.sh/search?q=${song}&type=track`
          );
          const data = await response.json();
          setSongs(data.tracks.items);
        } catch (err) {
          setSongs([]);
        }
      })(song);
    },
    [song]
  );
  return songs;
}
export default useSongs;
