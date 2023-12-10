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

const Cateogaary = () => {
    
    const [movieList, setMovieList] = useState([])

    let {id} = useParams();
    let {page} = useParams();
    let {type} = useParams();
     
    if(!page)  page = 1;
    let [pageNo,setPage] = useState(page); 

    console.log(id,'lllllllliii')
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [pageNo,type])

    
    const getData = () => {
   fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fb3db90cd38e403a94ae28f654e365a1&with_genres=${id}&page=${pageNo}`, options)
   .then(response => response.json())
   .then(response => {
    console.log(response)
    setMovieList(response.results)
   })
    }
    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>

            <div style={{width:"100%",background:"black",height:"60px",display:"flex",alignItems:"center",justifyContent:"center"}}>
               <button onClick={()=>{
               let  num = Number(pageNo);
               if(num>1){
                   setPage(num-1);
               }
                }}>prev</button>
                  <h2 style={{marginLeft:"10px"}}>{pageNo}</h2>
               <button onClick={()=>{
                  let  num = Number(pageNo);
                  setPage(num+1)
               }}>next</button>
               </div>
        </div>
    )
}

export default Cateogaary