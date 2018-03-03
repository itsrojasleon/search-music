import React, { Component } from 'react'
import Head from 'next/head'
import { CardRow } from '../helpers/styles'

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

    const minutes = Math.floor(this.state.time / 60000)
    const seconds = (this.state.time % 60000 / 1000).toFixed(0)
    const time = `${minutes}:${seconds}`
    this.setState({ time })
  }
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css" />
        </Head>
        <CardRow className={`${this.state.previewUrl}`}>
          <figure>
            <img src={this.props.album.images[0].url} alt="Image" />
          </figure>
          <div>
            <div>
              <figure>
                <img src={this.props.album.images[2].url} alt="Image" />
              </figure>
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
          </div>
        </CardRow>
        <style jsx>{`
          .preview-url {
            cursor: no-drop;
            filter: blur(3px);
          }
        `}</style>
      </div>
    )
  }
}
