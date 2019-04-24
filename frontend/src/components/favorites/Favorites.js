import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';
import { Spinner } from '../styled-components/favorites/favorites';
const FavoriteDetails = lazy(() => import('./FavoriteDetails'));
// import FavoriteDetail from './FavoriteDetails';

function Favorites(props) {
  const { fetchFavorites, favoriteSongs } = props;

  useEffect(() => {
    fetchFavorites();
  }, []);
  console.log(favoriteSongs);
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        {favoriteSongs.map(song => (
          <FavoriteDetails key={song.song_id} {...song} />
        ))}
      </Suspense>
    </Fragment>
  );
}
const mapStateToProps = ({ songs: { favoriteSongs } }) => ({ favoriteSongs });
export default connect(
  mapStateToProps,
  { fetchFavorites }
)(Favorites);
