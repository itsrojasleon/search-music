import React, { Component } from 'react'
import trackService from '../services/track'
import Head from 'next/head'
import Loading from '../components/shared/Loading'
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
    showCross: false,
    currentValue: ''
  };

  handleSearch = (event) => {
    this.setState({
      searchQuery: event.target.value,
      currentValue: event.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    if(!this.state.searchQuery) return null

    this.setState({ loading: true })

    trackService.search(this.state.searchQuery)
      .then(response => {
        this.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length,
          showCross: true
        })
      });
  }

  setSelectedTrack = (data) => {
    if(!data) return null
    this.setState({ selectedTrack: data });
  }

  clearSearcher = () => {
    this.setState({
      currentValue: '',
      showCross: false
    })
  }

  render() {
    return (
      <div className="container-react-spotify">
        <Head>
          <title>React Spotify</title>
          <link rel="shortcut icon" href="../static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="../static/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous" />
        </Head>
        <SearchBar
          query={this.handleClick}
          value={this.state.currentValue}
          clearSearcher={this.clearSearcher}
          showCross={this.state.showCross}
          search={this.handleSearch}
        />
        {this.state.songCounter > 0 && (
          <div className="notification is-danger">
            <p className="is-size-4 results">Results: {this.state.songCounter}</p>
          </div>
        )}
        {this.state.songCounter === 0 && (
          <section className="hero is-danger is-fullheight">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">¡Ups!</h1>
                <h2 className="subtitle">
                  Not found <strong>{this.state.searchQuery}</strong>
                </h2>
              </div>
            </div>
          </section>
        )}
        <div className="reproductor">
          <Player selectedTrack={this.state.selectedTrack} />
        </div>
        {this.state.loading ? <Loading /> : (
          <div style={{ width: '90%', margin: this.state.selectedTrack === '' ? 'auto' : '0 auto 150px auto' }}>
            <Card tracks={this.state.tracks} selectedTrack={this.setSelectedTrack} />
          </div>
        )}
        <style jsx global>{`
          body {
            font-family: 'Montserrat', sans-serif;
            background: white;
          }
          span::selection, p::selection, h1::selection, h2::selection {
            color: #ffffff;
            background: rgb(222,0,62);
          }
        `}</style>
      </div>
    )
  }
}
