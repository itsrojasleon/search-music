import React, { Component } from 'react';
import Head from 'next/head';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css" />
        </Head>
        <div className="columns">
          <div className="column">
            <a className="button is-danger is-loading">Loading</a>
          </div>
        </div>
        <style jsx>{`
          .column {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
