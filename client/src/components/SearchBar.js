import React, { useState } from 'react';
import useSongs from './useSongs';

function SearchBar() {
  const [value, setValue] = useState('hello');
  const songs = useSongs(value);

  const onChange = e => setValue(e.target.value);
  console.log(songs);
  return (
    <div>
      <input value={value} onChange={onChange} />
      <div>{value}</div>
    </div>
  );
}
export default SearchBar;
