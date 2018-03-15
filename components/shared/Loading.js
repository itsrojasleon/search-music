import React, { Component } from 'react'

import LoadingCard from './loading-card'

import { LoadingContainer } from '../../helpers/styles'

const Loading = () => {
  const components = []
  for (let i = 0; i < 12; i++) {
    components.push(
      <LoadingCard key={i} />
    )
  }
  return (
    <LoadingContainer>
      {components}
    </LoadingContainer>
  )
}
export default Loading
