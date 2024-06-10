import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  addNowTrendingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowTrendingMovies(json.results))
        }
            useEffect(()=>{
                getTrendingMovies()
            },[])
}

export default useTrendingMovies
