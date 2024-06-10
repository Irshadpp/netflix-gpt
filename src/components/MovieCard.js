import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({imagePath}) => {
  return (
    <div className='w-80 pr-4'>
      <img className=' ' src={IMG_CDN_URL+imagePath} alt="movie poster" />
    </div>
  )
}

export default MovieCard
