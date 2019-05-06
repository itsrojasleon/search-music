import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';
import useDocumentTitle from './hooks/useDocumentTitle';
import useFormInput from './hooks/useFormInput';
import useFetchResource from './hooks/useFetchResource';

import {
  InputContainer,
  Icon,
  Spinner,
  Input,
  EmptySearch
} from './styled-components/search-bar';

function SearchBar(props) {
  const input = useFormInput('');
  useDocumentTitle(input.value);
  useFetchResource(props.fetchSongs, input.value);

  return (
    <InputContainer>
      <Input className="input" {...input} placeholder="Search..." />
      {props.loading ? <Spinner /> : <Icon className="fas fa-search" />}
      {props.fallback && (
        <EmptySearch>
          <p>It does not exists, look for another song</p>
        </EmptySearch>
      )}
    </InputContainer>
  );
}
const mapStateToProps = ({ songs: { loadingSong, fallback } }) => ({
  loading: loadingSong,
  fallback
});
export default connect(
  mapStateToProps,
  { fetchSongs }
)(SearchBar);
