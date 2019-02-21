import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';
import { InputContainer, Icon, Input } from './styled-components/search-bar';

function SearchBar(props) {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);

  useEffect(
    () => {
      props.fetchSongs(text);
    },
    [text]
  );
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
export default connect(
  null,
  { fetchSongs }
)(SearchBar);
