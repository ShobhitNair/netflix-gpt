import React, { useRef } from "react";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json( )

    return json.results
  }
  const handleGptSearchClick = async() => {

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + searchText.current.value+ "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Jawan, Golmaal";
  const gptResults =    await openAI.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){

    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

  const dataArray = gptMovies.map((movie)=>searchMovieTMDB(movie)) 
    const tmdbResults = await Promise.all(dataArray);
    dispatch(addGptMovieResult({movieNames: gptMovies,movieResults:tmdbResults}));

  };
  return (
    <div className="m-0 p-0" >
      <form className="bg-black p-20 " onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className=" md:ml-12 mt-28 md:mt-6 p-1 px-5 md:px-20 rounded-md w-2/3 md:w-1/3 "
          placeholder="What would you like to watch today?"
        />
        <button
          className="bg-red-600 m-1 md:m-5 p-2 rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
