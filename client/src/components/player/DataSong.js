import React from 'react';

function DataSong({ name, image }) {
  return (
    <div>
      <img src={`${image[0].url}`} />
      <p>{name}</p>
    </div>
  );
}
export default DataSong;
