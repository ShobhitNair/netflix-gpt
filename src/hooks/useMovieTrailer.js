import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer =(movieId)=>{
    console.log(movieId);
    const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const trailers = json.results.filter((video) => video.type == "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;