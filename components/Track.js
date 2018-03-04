import React, { Component } from 'react'
import {
  CardRow,
  Description,
  Figure
} from '../helpers/styles'
import { helperTime } from '../helpers/time'

export default class Track extends Component {
  state = {
    previewUrl: '',
    disabled: false,
    time: this.props.duration_ms,
  }
  selectTrack = () => {
    this.props.onClick(this.props)
  };

  componentDidMount() {
    if(!this.props.preview_url) {
      this.setState({
        previewUrl: 'preview-url',
        disabled: 'true',
      })
    }
    this.setState({ time: helperTime(this.state.time) })
  }
  render() {
    return (
      <CardRow>
        <div className={`${this.state.previewUrl}`}>
          <Figure>
            <img style={{ maxWidth: '100%' }} src={this.props.album.images[0].url} alt="Image" />
          </Figure>
          <Description>
            <div>
              <Figure>
                <img style={{ maxWidth: '100%' }} src={this.props.album.images[2].url} alt="Image" />
              </Figure>
              <div>
                <p>{this.props.name}</p>
                <p>{this.props.artists[0].name}</p>
              </div>
            </div>
            <div>
              <small>{this.state.time}</small>
              <br />
              <small>
                <button disabled={this.state.disabled} onClick={this.selectTrack}>▶︎</button>
              </small>
            </div>
          </Description>
        </div>
        <style jsx>{`
          .preview-url {
            cursor: no-drop;
            filter: blur(3px);
          }
        `}</style>
      </CardRow>
    )
  }
}
