import React from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions';

function Favorites(props) {
  React.useEffect(() => {
    props.fetchFavorites();
  }, []);
  console.log(props.favoriteSongs);
  return <div>Favorites</div>;
}
const mapStateToProps = ({ songs: { favoriteSongs } }) => ({ favoriteSongs });
export default connect(
  mapStateToProps,
  { fetchFavorites }
)(Favorites);
