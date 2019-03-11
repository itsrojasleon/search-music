import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';
import { InputContainer, Icon, Input } from './styled-components/search-bar';

function SearchBar(props) {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    props.fetchSongs(text);
  }, [text]);
  return (
    <InputContainer>
      <Input
        className="input"
        value={text}
        onChange={onChange}
        placeholder="Search..."
      />
      <Icon className="fas fa-search" />
      {props.loading && <div>Loading...</div>}
    </InputContainer>
  );
}
const mapStateToProps = ({ songs: { loadingSong } }) => ({
  loading: loadingSong
});
export default connect(
  mapStateToProps,
  { fetchSongs }
)(SearchBar);
