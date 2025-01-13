import {useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.jsx";

const ComingSoon =()=>{
    const [comingSoon,setComingSoon] =useState([])
    let page =1
    const MOVIE_URL =`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    myHeaders.append("Authorization","Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTFjNDU0M2QxOWQ3YjcyMDkzODYyZjM2ZWE0OTU3ZCIsIm5iZiI6MTcxNjQ3MjQzOC41Niwic3ViIjoiNjY0ZjRhNzZhYmQ4OWYyMDg3ZWMxNzY2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OYWG_dE1lWmPQcCzumYeMN9Oedst8puAZZn59GMnnFQ")

    const fetchComingSoon =(async()=>{
        const response =await fetch(MOVIE_URL,{
            method:"GET",
            headers:myHeaders
        })
        const data =await response.json()
        if(response.ok){
            setComingSoon(data.results)
        }
    })
    const {isLoading,error} =useSWR(MOVIE_URL,fetchComingSoon)
    if(isLoading) return <Loading/>
    if(error) return <p>Error</p>
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"5px",color:"#fff",padding:"5px"}}>
            {comingSoon.map((movie)=>(
                <>
                    <h1>{movie.original_title}</h1>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{height:"300px"}}/>
                    <p style={{width:"97%"}}>{movie.overview}</p>
                    <p>{movie.vote_average}/10</p>
                </>
            ))}

        </div>
    )
}
export default ComingSoon