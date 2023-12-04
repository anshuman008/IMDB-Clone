import React, {useEffect, useState} from "react"
// import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "./Card"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjNkYjkwY2QzOGU0MDNhOTRhZTI4ZjY1NGUzNjVhMSIsInN1YiI6IjY0M2IyMmYwNTAxY2YyMDUxOTM4NjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pg3884HCkSFjdX36Vn3DUioQwTOTUnYOkZejuvpNj9Y'
    }
  };

const SearchComp = () => {
    
    const [movieList, setMovieList] = useState([])
    const {search} = useParams()
   
    console.log(search,'lllllllliii')
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [search])

    
    const getData = () => {
   fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
   .then(response => response.json())
   .then(response => {
    console.log(response)
    setMovieList(response.results)
   })
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(search ? search : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchComp