const FanChoice = (props) => {
  return (
    <div id="searchBox">
      <button
        type="submit"
        id="searchBtn"
        onClick={() => props.setCategoryValue('movie')} //props.setSearchValue(event?.target.value)
      >
        Movies
      </button>
      <button
        type="submit"
        id="searchBtn"
        onClick={() => props.setCategoryValue('series')} //props.setSearchValue(event?.target.value)
      >
        Series
      </button>
    </div>
  )
}

export default FanChoice
