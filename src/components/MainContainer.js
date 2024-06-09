import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VidoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    if(!movies) return 
    const {original_title, overview, id} =  movies[0]
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VidoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
