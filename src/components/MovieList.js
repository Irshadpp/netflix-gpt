import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-4'>
        <h1 className='text-3xl text-white font-bold py-4'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
            {
               movies && movies.map(movie => <MovieCard key={movie.id} imagePath={movie.backdrop_path}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList
