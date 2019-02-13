import React, { useState } from 'react';
import useSongs from './hooks/useSongs';

function SearchBar() {
  const [value, setValue] = useState('');
  const songs = useSongs(value);

  const onChange = e => setValue(e.target.value);
  console.log(songs);
  return (
    <div>
      <div className="ui input">
        <input
          value={value}
          onChange={onChange}
          placeholder="Search on me..."
        />
      </div>
    </div>
  );
}
export default SearchBar;
