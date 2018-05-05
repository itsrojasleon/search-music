import React from 'react';
import styled from 'styled-components';

import { helperTime } from '../helpers/time';

const ContainerProgress = styled.div`
  background: rgb(229,229,229);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 100%;
  margin: auto;
`;
const Progress = styled.div`
  width: ${props => props.value}%;
  background-color: rgb(222,0,62);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 10px;
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

  handleVolume = (e) => {
    this.audio.volume = e.target.value;
    console.log("audio: ", this.audio.volume);
    console.log("e: ", e.target.value);
  }

  render() {
    const { selectedTrack } = this.props;
    const { paused, currentProgress, currentTime } = this.state;
    return (
      <div className="fixed">
        {selectedTrack && (
           <div>
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
               <span>
                <input
                  type="range"
                  max={1}
                  min={0}
                  step={.05}
                  onChange={this.handleVolume}
                />
               </span>
             </div>
             <div style={{width: '100%', backgroundColor: '#fff'}}>
               <div className="progress-container">
                <span className="first-number">{helperTime(currentTime)}</span>
                <ContainerProgress>
                  <Progress max="100" value={this.state.currentProgress.toString()}></Progress>
                </ContainerProgress>
                <span className="second-number">{helperTime(30)}</span>
               </div>
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
            align-items: center;
            max-height: 100%;
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
            width: 100%;
            max-height: 100%;
            box-sizing: border-box;
          }
          .audio {
            text-align: center;
            display: flex;
            align-items: center;
          }
          .progress-container {
            background: white;
            padding-bottom: 20px;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            width: 100%;
          }
          .first-number {
            justify-self: end;
          }
          .second-number {
            justify-self: start;
          }
        `}</style>
      </div>
    )
  }
}
export default Player;
