let SearchString = ''

const searchBox = (props) => {
  return (
    <div id="searchBox">
      <input
        id="searchBar"
        value={props.value}
        onChange={(event) => (SearchString = event?.target.value)} //props.setSearchValue(event?.target.value)
      ></input>

      <button
        type="submit"
        value="Submit"
        id="searchBtn"
        onClick={() => props.setSearchValue(SearchString)}
      >
        Search
      </button>
    </div>
  )
}

export default searchBox
