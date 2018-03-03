import React from 'react'
import Track from './Track'

import { GridCard } from '../helpers/styles'

const Card = ({ tracks, selectedTrack }) => {
  return (
    <GridCard>
      {tracks.map((track) =>
        <Track key={track.id} onClick={selectedTrack} {...track} />
      )}
    </GridCard>
  )
}
export default Card
