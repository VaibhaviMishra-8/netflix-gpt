import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4 rounded-md">
        <img alt="MoviePoster" src = {IMG_CDN_URL+posterPath}/>
    </div>
  );
};

export default MovieCard