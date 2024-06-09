import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VidoBackground = ({movieId}) => {

  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  useMovieTrailer(movieId)
  return (
    <div className='w-screen'>
    <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/Kdr5oedn7q8?autoplay=0&mute=1${trailerVideo?.key ? '&' + trailerVideo.key : ''}`}
        allow='autoplay; encrypted-media'
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
    ></iframe>
</div>

  )
}

export default VidoBackground
