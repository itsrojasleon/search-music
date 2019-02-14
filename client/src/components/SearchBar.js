import React, { useState } from 'react';
// import useSongs from './hooks/useSongs';
import { Input } from './styled-components/search-bar';

function SearchBar() {
  const [value, setValue] = useState('');
  // const songs = useSongs(value);

  const onChange = e => setValue(e.target.value);
  return (
    <div>
      <Input
        className="input"
        value={value}
        onChange={onChange}
        placeholder="Search on me..."
      />
    </div>
  );
}
export default SearchBar;
