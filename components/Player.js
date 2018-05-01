import React from 'react';

const Player = ({ selectedTrack }) => {
  return (
    <div className="fixed">
      {selectedTrack && (
        <div className="box reproductor">
          <div className="description">
            <figure className="image is-64x64">
              <img src={selectedTrack.album.images[1].url} />
            </figure>
            <div className="description-children">
              <p>{selectedTrack.name}</p>
              <small>{selectedTrack.artists[0].name}</small>
            </div>
          </div>
          <div className="container-player">
            <audio
              className="player"
              autoPlay
              controls
              src={selectedTrack.preview_url}>
            </audio>
          </div>
        </div>
      )}
      <style jsx>{`
        .fixed  {
          position: fixed;
          z-index: 999;
          bottom: 0;
          width: 100%;
          border-top: 1px solid #E0E0E0;
        }
        .reproductor {
          padding-bottom: 0px !important;
          padding-top: 10px !important;
          background-color: rgb(248,248,248);
        }
        .container-player {
          display: flex;
        }
        .description {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .description-children {
          display: flex;
          flex-direction: column;
          margin-left: 12px;
        }
        .player {
          width: 40%;
          margin: 0px auto 0px auto;
        }
        img {
          width: 22%;
        }
      `}</style>
    </div>
  )
}
export default Player;
