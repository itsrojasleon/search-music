import React, { useState } from 'react';
import useSongs from './hooks/useSongs';
import { InputContainer, Icon, Input } from './styled-components/search-bar';

function SearchBar(props) {
  const [text, setText] = useState('');
  // const songs = useSongs(text);

  const onChange = e => setText(e.target.value);
  return (
    <InputContainer>
      <Input
        className="input"
        value={text}
        onChange={onChange}
        placeholder="Search on me..."
      />
      <Icon className="fas fa-search" />
    </InputContainer>
  );
}
export default SearchBar;
