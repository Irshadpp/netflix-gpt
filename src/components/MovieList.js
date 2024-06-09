import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
            {
               movies && movies.map(movie => <MovieCard key={movie.id} imagePath={movie.poster_path}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList
