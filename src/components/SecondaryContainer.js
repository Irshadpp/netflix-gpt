import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movie);
    console.log("--------------------",movies.nowPlayingMovies);
  return (
    <div className='bg-black w-screen'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Trending" movies={movies.trendingMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer
