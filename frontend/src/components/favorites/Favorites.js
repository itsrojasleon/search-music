import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites, selectSong } from '../../actions';
import { Spinner } from '../styled-components/favorites/favorites';

import {
  Container,
  Titles,
  Bold
} from '../styled-components/favorites/favorites';

const FavoriteDetails = lazy(() => import('./FavoriteDetails'));

function Favorites(props) {
  const { fetchFavorites, selectSong, favoriteSongs } = props;

  useEffect(() => {
    fetchFavorites();
  }, []);
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
            <FavoriteDetails
              selectSong={selectSong}
              key={song.id}
              index={i}
              track={song}
            />
          ))}
        </Container>
      </Suspense>
    </Fragment>
  );
}
const mapStateToProps = ({ songs: { favoriteSongs } }) => ({ favoriteSongs });
export default connect(
  mapStateToProps,
  { fetchFavorites, selectSong }
)(Favorites);
