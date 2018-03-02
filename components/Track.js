import React, { Component } from 'react'
import Head from 'next/head'

export default class Track extends Component {
  state = {
    previewUrl: '',
    disabled: '',
    time: this.props.duration_ms,
  }
  selectTrack = () => {
    this.props.onClick(this.props)
  };

  componentDidMount() {
    if(!this.props.preview_url) {
      this.setState({
        previewUrl: 'preview-url',
        disabled: 'is-static',
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
        <div className={`card ${this.state.previewUrl}`}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.album.images[0].url} alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.props.album.images[2].url} alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle is-6">{this.props.artists[0].name}</p>
              </div>
            </div>

            <div className="content">
              <small>{this.state.time}</small>
              <br />
              <small>
                <a className={`button is-danger ${this.state.disabled}`} onClick={this.selectTrack}>▶︎</a>
              </small>
            </div>
          </div>
        </div>
        <style jsx>{`
          .card.preview-url {
            cursor: no-drop;
            filter: blur(3px);
          }
        `}</style>
      </div>
    )
  }
}
