const WatchList = (props: { movies: any[] }) => {
  return (
    <div className="Movies">
      {props.movies.map((movie: { Poster: string | undefined }, index: any) => (
        <div className="Movie">
          <img
            id="ShowMovies"
            src={movie.Poster}
            alt="movie"
            display="block"
          ></img>
          <h2 id="ShowMovies" display="none">
            {movie.Title}
          </h2>
          <h2 id="ShowMovies" display="none">
            {movie.Type}
          </h2>
          <h2 id="ShowMovies" display="none">
            {movie.Year}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default WatchList
