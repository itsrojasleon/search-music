import React from 'react'
import Track from './Track'

const Card = ({ tracks, selectedTrack }) => {
  return (
    <div>
      {tracks.map((track) =>
        <div className="column scale is-3" key={track.id}>
          <Track onClick={selectedTrack} {...track} />
        </div>
      )}
    </div>
  )
}
export default Card
