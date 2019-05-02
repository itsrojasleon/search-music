import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites, selectSong } from '../../actions';
import {
  Spinner,
  Container,
  Titles,
  Bold,
  Login
} from '../styled-components/favorites/favorites';

const FavoriteDetails = lazy(() => import('./FavoriteDetails'));

function Favorites(props) {
  const { fetchFavorites, selectSong, favoriteSongs } = props;

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);
  return (
    <Fragment>
      {props.auth && (
        <Fragment>
          {favoriteSongs.length === 0 ? null : (
            <Suspense fallback={<Spinner />}>
              <Container>
                <Titles>
                  <Bold>#</Bold>
                  <Bold>Track</Bold>
                  <Bold>Artist</Bold>
                  <Bold watch>Album</Bold>
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
          )}
        </Fragment>
      )}
      {!props.auth && <Login>You need to login first</Login>}
    </Fragment>
  );
}
const mapStateToProps = ({ auth, songs: { favoriteSongs } }) => ({
  favoriteSongs,
  auth
});
export default connect(
  mapStateToProps,
  { fetchFavorites, selectSong }
)(Favorites);
