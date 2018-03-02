import React from 'react'
import Track from './Track'

import { GridCard } from '../helpers/styles'

const Card = ({ tracks, selectedTrack }) => {
  return (
    <GridCard>
      {tracks.map((track) =>
        <div className="column scale is-3" key={track.id}>
          <Track onClick={selectedTrack} {...track} />
        </div>
      )}
    </GridCard>
  )
}
export default Card
