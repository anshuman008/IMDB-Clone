import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "./Card"



const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    let {type} = useParams()
    let {page} = useParams();
     
    if(!page)  page = 1;
    let [pageNo,setPage] = useState(page);

    if(!type) type = "popular";

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type,pageNo])

    const getData = () => {
        console.log(pageNo,'kkkookoki')
        // https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=2
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${pageNo}`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
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
                    // window.location=`/movies/${type}/${page}`
                // }
                }}>prev</button>
                <h2 style={{marginLeft:"10px"}}>{pageNo}</h2>
               <button onClick={()=>{
                let  num = Number(pageNo);
                setPage(num+1)
                // window.location=`/movies/${type?type:"popular"}/${page}`
               }}>next</button>
               </div>
          
        </div>
    )
}

export default MovieList