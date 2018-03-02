import React, { Component } from 'react'
import trackService from '../services/track'
import Head from 'next/head'
import Loading from '../components/shared/Loading'
import Banner from '../components/shared/Banner'
import Player from '../components/Player'
import SearchBar from '../components/SearchBar'
import Card from '../components/card'

export default class Home extends Component {
  state = {
    searchQuery: '',
    tracks: [],
    loading: false,
    selectedTrack: '',
    songCounter: null,
  };

  handleSearch = (event) =>{
    this.setState({
      searchQuery: event.target.value,
    });
  }


  handleClick = (e) => {
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

  setSelectedTrack = (data) => {
    if(!data) return null
    this.setState({
      selectedTrack: data
    });
  }

  render() {
    return (
      <div className="container-react-spotify">
        <Head>
          <title>React Spotify</title>
          <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="../static/favicon.ico" type="image/x-icon" />
        </Head>
        <SearchBar query={this.handleClick} search={this.handleSearch} />
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
            <Card tracks={this.state.tracks} selectedTrack={this.setSelectedTrack} />
          </div>
        )}
        <style jsx>{`
          .container-music {
            display: flex;
            align-items: center;
            padding: 40px;
            box-shadow: 0 0 10px 5px #ccc;
            margin-bottom: 30px;
            height: 30vh;
            width: 100vw;
            background-attachment: fixed;
            background: linear-gradient(to right, #F44336, #EF9A9A);
          }
          .image-logo {
            background-image: url('https://image.ibb.co/mcfhvG/logo.png');
            height: 20vh;
            background-repeat: no-repeat;
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
