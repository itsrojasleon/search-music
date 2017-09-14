import React, { Component } from 'react';
import trackService from '../services/track';
import Track from '../components/Track';
import Head from 'next/head';
import Loading from '../components/shared/Loading';
import Player from '../components/Player';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      tracks: [],
      loading: false,
      selectedTrack: '',
      songCounter: null,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setSelectedTrack = this.setSelectedTrack.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }


  handleClick(e) {
    e.preventDefault();
    if(!this.state.searchQuery) {
      return null;
    }

    this.setState({
      loading: true,
    })

    trackService.search(this.state.searchQuery)
      .then(response => {
        this.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length,
        })
      });
  }

  setSelectedTrack(data) {
    if(!data) {
      return null
    }
    this.setState({
      selectedTrack: data,
    });
  }

  render() {
    return (
      <div className="container-react-spotify">
        <Head>
          <title>React Spotify</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css" />
          <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="../static/favicon.ico" type="image/x-icon" />
        </Head>
        <div className="columns container-music">
          <div className="column is-8">
            <div className="field">
              <div className="control">
                <form onSubmit={this.handleClick} className="container-search-bar">
                  <input
                    className="input is-danger is-medium"
                    type="text"
                    placeholder="Busca tu canción favorita"
                    onChange={this.handleSearch}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="column container-button">
            <a onClick={this.handleClick} className="button is-danger is-medium">Buscar</a>
          </div>
        </div>
        {this.state.songCounter > 0 && (
          <div className="notification is-danger">
            <p className="is-size-4 results">Resultados: {this.state.songCounter}</p>
          </div>
        )}
        {this.state.songCounter === 0 && (
          <section className="hero is-danger is-fullheight">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">¡Ups!</h1>
                <h2 className="subtitle">
                  No se encontraron resultados con <strong>{this.state.searchQuery}</strong>
                </h2>
              </div>
            </div>
          </section>
        )}
        <div className="reproductor">
          <Player selectedTrack={this.state.selectedTrack} />
        </div>
        {this.state.loading ? <Loading /> : (
          <div className="columns is-multiline">
            {this.state.tracks.map((track) =>
              <div className="column scale is-3" key={track.id}>
                <Track onClick={this.setSelectedTrack} {...track} />
              </div>
            )}
          </div>
        )}
        <style jsx>{`
          .container-music {
            background-image: url('https://image.ibb.co/dwV3mv/200.jpg');
            display: flex;
            align-items: center;
            padding: 40px;
            box-shadow: 0 0 10px 2px #C7C7C7;
            margin-bottom: 30px;
            height: 75vh;
            width: 100%;
            background-attachment: fixed;
          }
          .container-search-bar {
            display: flex;
            justify-content: flex-end;
          }
          .container-button {
            justify-content: flex-start;
            display: flex;
          }
          .reproductor {
            position: fixed;
            bottom: 0;
            z-index: 999;
            width: 100%;
          }
          .input {
            width: 70%;
          }
          .columns.is-multiline {
            margin-bottom: 100px;
          }
          .is-selected {
            background-color: red;
          }
          .scale {
            transition: .3s;
          }
          .scale:hover {
            transform: scale(1.1);
          }
          .results {
            text-align: center;
          }
          @media(max-width: 800px) {
            .container-music {
              flex-direction: column;
              height: 30vh;
            }
            .input {
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}
