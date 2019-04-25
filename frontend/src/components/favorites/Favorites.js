import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';
import { Spinner } from '../styled-components/favorites/favorites';

import {
  Container,
  Titles,
  Bold
} from '../styled-components/favorites/favorites';

const FavoriteDetails = lazy(() => import('./FavoriteDetails'));

function Favorites(props) {
  const { fetchFavorites, favoriteSongs } = props;

  useEffect(() => {
    fetchFavorites();
  }, []);
  // console.log(favoriteSongs);
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Container>
          <Titles>
            <Bold>#</Bold>
            <Bold>Track</Bold>
            <Bold>Artist</Bold>
            <Bold>Album</Bold>
          </Titles>
          {favoriteSongs.map((song, i) => (
            <FavoriteDetails key={song.id} index={i} {...song} />
          ))}
        </Container>
      </Suspense>
    </Fragment>
  );
}
const mapStateToProps = ({ songs: { favoriteSongs } }) => ({ favoriteSongs });
export default connect(
  mapStateToProps,
  { fetchFavorites }
)(Favorites);
