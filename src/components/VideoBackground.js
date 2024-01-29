import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movie?.trailerVideo);
    useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
      className="w-full  aspect-video "
        src={"https://www.youtube.com/embed/"+ trailerVideo+"?&autoplay=1&mute=1"}
        title="Job Mat Choddo | Stand Up Comedy by Anmol Garg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
