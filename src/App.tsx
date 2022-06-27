import './css/styles.css'
import React, { useEffect, useState } from 'react'
import WatchList from './WatchList'
import SearchBox from './SearchBox'
import FanChoice from './FanChoice'
import SortOut from './SortOut'
let publicJson: []

export const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [sortValue, setSortValue] = useState('')

  const printJSon = async (json: React.SetStateAction<never[]>) => {
    if (json) {
      setMovies(json)
    }
  }
  //used for search bar
  const getFilmRequest = async (searchValue: string) => {
    if (searchValue) {
      let element = (document.getElementById('sortBtn').style.display = 'block')

      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d41ba79f`

      const response = await fetch(url)
      const responseJson = await response.json()

      publicJson = responseJson.Search
      printJSon(responseJson.Search)
    }
  }

  const getCategoryRequest = async () => {
    let url = ''
    if (categoryValue == 'series' || categoryValue == 'movie') {
      let element = (document.getElementById('sortBtn').style.display = 'block')

      if (categoryValue == 'movie') {
        url = 'http://www.omdbapi.com/?s=Avengers&apikey=d41ba79f'
      } else {
        url = 'http://www.omdbapi.com/?s=Stranger Things&apikey=d41ba79f'
      }

      const response = await fetch(url)
      const responseJson = await response.json()
      publicJson = responseJson.Search

      printJSon(responseJson.Search)
    }
  }

  const sortMovieByDate = async () => {
    if (sortValue) {
      for (let i = 0; i < publicJson.length; i++) {
        for (let j = 0; j < publicJson.length - 1; j++) {
          const Numfirst = publicJson[j].Year.replace(/\D/g, '')
          const Numsecond = publicJson[j + 1].Year.replace(/\D/g, '')
          const first = parseInt(Numfirst.substring(0, 4))
          const second = parseInt(Numsecond.substring(0, 4))

          if (first > second) {
            const swap = publicJson[j]
            publicJson[j] = publicJson[j + 1]
            publicJson[j + 1] = swap
          }
        }
      }

      printJSon(publicJson)
    }
  }

  //useEffect for search bar
  useEffect(() => {
    getFilmRequest(searchValue)
  }, [searchValue]) //it will call getFildRequest after the array is filled

  //useEffect for radio buttons
  useEffect(() => {
    getCategoryRequest()
  }, [categoryValue]) //it will call getFildRequest after the array is filled

  useEffect(() => {
    sortMovieByDate()
  }, [sortValue]) //it will call getFildRequest after the array is filled

  return (
    <>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <FanChoice
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <SortOut sortValue={sortValue} setSortValue={setSortValue} />

      <div>
        <WatchList movies={movies} />
      </div>
    </>
  )
}
