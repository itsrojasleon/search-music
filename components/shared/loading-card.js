import React from 'react'
import {
  LoadingCardContainer,
  LoadingImage,
  LoadingBar,
  LoadingContainerImage
} from '../../helpers/styles'

const LoadingCard = () => (
  <LoadingCardContainer>
    <LoadingImage />
    <LoadingBar />
    <LoadingBar />
    <LoadingBar />
  </LoadingCardContainer>
)

export default LoadingCard
