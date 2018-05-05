import React from 'react';
import styled from 'styled-components';

const CurrentTime = styled.div`
  background: rgb(222,0,62);
  height: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: .3s;
  width: ${props => props.width}%;
`;

class Player extends React.Component {
  state = {
    duration: null,
    paused: false,
    currentTime: 0,
    currentProgress: 0
  };
  togglePlay = () => {
    if (this.state.paused) {
      this.audio.play();
    }else {
      this.audio.pause();
    }
    this.setState((prevState) => ({
      paused: !prevState.paused,
    }))
  }
  setRef = (audio) => {
    this.audio = audio;
  }

  static getDerivedStateFromProps(props, state) {
    if (props) {
      return {
        paused: false,
      }
    }
    return null;
  }

  onTimeUpdate = (event) => {
    this.setState({
      currentTime: this.audio.currentTime,
      currentProgress: (this.audio.currentTime * 100) / event.target.duration,
    })
  }

  onLoadedMetadata = (event) => {
    this.setState(() => ({
      duration: this.audio.duration,
    }));
  }

  componentWillUnmount() {

  }

  render() {
    const { selectedTrack } = this.props;
    const { paused, currentProgress, currentTime } = this.state;
    return (
      <div className="fixed">
        {selectedTrack && (
          <div className="reproductor">
            {/*description*/}
            <div className="description">
              <img className="image" src={selectedTrack.album.images[1].url} />
              <div>
                <p>{selectedTrack.name}</p>
                <small>{selectedTrack.artists[0].name}</small>
              </div>
            </div>
            {/* end description*/}
            <div>
              <div className="audio">
                <audio
                  className="player"
                  ref={this.setRef}
                  autoPlay
                  onTimeUpdate={this.onTimeUpdate}
                  onLoadedMetadata={this.onLoadedMetadata}
                  src={selectedTrack.preview_url}>
                </audio>
                <span>
                  {paused
                    ? <i onClick={this.togglePlay} className="fas fa-play"></i>
                    : <i onClick={this.togglePlay} className="fas fa-pause"></i>
                  }
                </span>
              </div>
              <div style={{width: '100%'}}>
                {currentTime.toFixed(0)}
                {/*<CurrentTime width={this.state.currentProgress.toString()} />*/}
                <progress max="100" value={this.state.currentProgress}></progress>
              </div>
            </div>
            <div>
              <span>Volume</span>
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
            padding-top: 0px !important;
            background-color: white;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
          }
          img.image {
            width: 17%;
            border-radius: 7px;
            margin-right: 10px;
          }
          .fas.fa-play, .fas.fa-pause {
            border-radius: 50%;
            background-color: rgb(222,0,62);
            padding: 10px;
            color: #fff;
          }
          .description {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}
export default Player;
