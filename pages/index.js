import React, { Component } from 'react'
import trackService from '../services/track'
import Head from 'next/head'
import Loading from '../components/shared/Loading'
import Player from '../components/Player'
import SearchBar from '../components/SearchBar'
import Card from '../components/card'

import styled from 'styled-components';

const ContainerCards = styled.div`
  width: 90%;
  margin: ${props => props.styleMargin === '' ? 'auto' : '0 auto 150px auto'};
`;

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
    const { currentValue, showCross, songCounter, selectedTrack, searchQuery, loading, tracks } = this.state;
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
          value={currentValue}
          clearSearcher={this.clearSearcher}
          showCross={showCross}
          search={this.handleSearch}
        />
        {songCounter > 0 && (
          <p>Results: {songCounter}</p>
        )}
        {songCounter === 0 && (
         <div className="container">
          <h1 className="title">¡Ups!</h1>
          <h2 className="subtitle">
            Not found <strong>{searchQuery}</strong>
          </h2>
        </div>
        )}
        <div className="reproductor">
          <Player selectedTrack={selectedTrack} />
        </div>
        {loading
          ? <Loading />
          : <ContainerCards styleMargin={selectedTrack}>
              <Card tracks={tracks} selectedTrack={this.setSelectedTrack} />
            </ContainerCards>
        }
        <style jsx global>{`
          body {
            font-family: 'Montserrat', sans-serif;
            background: white;
          }
          span::selection, p::selection, h1::selection, h2::selection, small::selection {
            color: #ffffff;
            background: rgb(222,0,62);
          }
        `}</style>
      </div>
    )
  }
}
