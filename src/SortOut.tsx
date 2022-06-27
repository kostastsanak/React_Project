const SortOut = (props) => {
  return (
    <div id="searchBox">
      <button
        type="submit"
        id="sortBtn"
        value={props.value}
        onClick={() => props.setSortValue('Sort')} //props.setSearchValue(event?.target.value)
      >
        Sort
      </button>
    </div>
  )
}

export default SortOut
