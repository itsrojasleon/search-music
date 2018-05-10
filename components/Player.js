import React from 'react';
import styled from 'styled-components';

import { helperTime } from '../helpers/time';

const Reproductor = styled.div`
  padding-bottom: 0px !important;
  padding-top: 0px !important;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  max-height: 100%;
  @media(max-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;

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
    currentProgress: 0,
    volume: 1,
    lastVolume: null,
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
    this.setState(() => ({
      volume: this.audio.volume,
    }));
  }

  handleToggleVolume = () => {
    // make the current Value
    const lastVolume = this.state.volume;
    this.setState({
      lastVolume: lastVolume,
    });

    if(this.audio.volume !== 0) {
      this.audio.volume = 0;
      this.setState({
        volume: this.audio.volume,
      })
    }else {
      this.audio.volume = this.state.lastVolume;
      this.setState({
        volume: this.audio.volume,
      });
    }
  }

  render() {
    const { selectedTrack } = this.props;
    const { paused, currentProgress, currentTime, volume } = this.state;
    return (
      <div className="fixed">
        {selectedTrack && (
           <div>
             <Reproductor>
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
               <span className="volume-container">
               {this.audio && (
                  <span onClick={this.handleToggleVolume} className="volume-icon">
                    {volume === 0 && <i className="fas fa-volume-off"></i>}
                    {volume > 0 && volume <= .5 && <i className="fas fa-volume-down"></i>}
                    {volume > .5 && <i className="fas fa-volume-up"></i>}
                  </span>
                )}
                <input
                  type="range"
                  max={1}
                  min={0}
                  step={.05}
                  onChange={this.handleVolume}
                  className="input-range"
                  value={volume}
                />
               </span>
             </Reproductor>
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
          .input-range {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 10px;
            background: #E0E0E0;
            outline: none;
            opacity: .9;
            -webkit-transition: .2s;
            transition: opacity .2s;
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
            cursor: grab;
          }
          .input-range:hover {
            opacity: 1;
          }
          .input-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            background: rgb(222,0,62);
            cursor: grab;
            border-radius: 50%;
          }

          .input-range::-moz-range-thumb {
            width: 15px;
            height: 15px;
            background: rgb(222,0,62);
            cursor: grab;
            border-radius: 50%;
          }
          .volume-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            grid-gap: 6px;
          }
          .volume-icon {
            justify-self: end;
          }
          .fas.fa-volume-off,
          .fas.fa-volume-down,
          .fas.fa-volume-up {
            font-size: 19px;
            transition: .2s;
          }
          .fas.fa-volume-off:hover,
          .fas.fa-volume-down:hover,
          .fas.fa-volume-up:hover {
            cursor: pointer;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    )
  }
}
export default Player;
