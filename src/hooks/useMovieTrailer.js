import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Get the trailer video from Redux store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // Function to fetch trailer video
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      // Filter for "Trailer" type videos
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log("Fetched Trailer:", trailer);

      // Dispatch the trailer video to Redux store
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  // Fetch the video when the movieId changes
  useEffect(() => {
    if (!trailerVideo) {
      // Avoid refetching if already available
      getMovieVideos();
    }
  }, []);
};

export default useMovieTrailer;
