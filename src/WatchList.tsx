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
          <div className="details">
            <h2>{movie.Title}</h2>
            <h2>{movie.Type}</h2>
            <h2>{movie.Year}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WatchList
