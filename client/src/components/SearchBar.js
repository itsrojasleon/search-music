import React, { useState } from 'react';
// import useSongs from './hooks/useSongs';
import { InputContainer, Icon, Input } from './styled-components/search-bar';

function SearchBar() {
  const [value, setValue] = useState('');
  // const songs = useSongs(value);

  const onChange = e => setValue(e.target.value);
  return (
    <InputContainer>
      <Input
        className="input"
        value={value}
        onChange={onChange}
        placeholder="Search on me..."
      />
      <Icon className="fas fa-search" />
    </InputContainer>
  );
}
export default SearchBar;
