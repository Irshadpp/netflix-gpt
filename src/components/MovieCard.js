import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({imagePath}) => {
  return (
    <div>
      <img src={IMG_CDN_URL+imagePath} alt="movie poster" />
    </div>
  )
}

export default MovieCard
