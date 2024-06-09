import { useEffect } from 'react'
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
 
    const dispatch = useDispatch();

    const getMovieVideos = async () =>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
      const json = await data.json();
      const filteredData = json.results.filter(item => item.type === "Trailer");
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    }
  
    useEffect(()=>{
      getMovieVideos();
    })
}

export default useMovieTrailer
