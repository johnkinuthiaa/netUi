import { useState} from "react";
import useSWR from "swr";
import Loading from "./Loading.jsx";
import {useNavigate} from "react-router";

const MovieContainer =({url})=>{
    const[movie,setMovies] =useState([])
    const myHeaders =new Headers()
    const navigate =useNavigate()
    myHeaders.append("Content-Type","application/json")
    myHeaders.append("Authorization", import.meta.env.REACT_APP_TMDB_API_KEY)
    const fetchMovies =(async (url)=>{
        const response =await fetch(url,{
            method:"GET",
            headers:myHeaders
        })
        const data =await response.json()
        setMovies(data.results)
    })
    const {isLoading,error} =useSWR(url,fetchMovies)
    if (isLoading) return <Loading/>
    if (error) return <div> Error fetching data</div>
    //

    return(
        <div style={{display:"flex",marginLeft:"10px"}}>
            {movie?.length>1?(
                movie.map((movie,key)=>(
                    <div key={key} style={{cursor:"pointer"}}
                         onClick={()=>navigate(`/description/${movie.id}`)}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                             alt={movie.original_title}
                             style={{display:"flex", width:"200px",height:"250px",borderRadius:"10px",padding:"5px"}}
                        />
                    </div>
                ))
            ):(
                <div> no movies found</div>
            )}
        </div>
    )
}
export default MovieContainer