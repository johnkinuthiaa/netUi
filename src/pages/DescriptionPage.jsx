import {useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.jsx";
import "./styles/descriptions.css"

const DescriptionPage =()=>{
    const URL =window.location.href
    const movieId =URL.match(/[^/]+$/)
    console.log(movieId[0])
    const FETCH_MOVIES_ENDPOINT =`/${movieId}`
    const MOVIES_URL ="https://api.themoviedb.org/3/movie"

    const [movie,setMovie] =useState({})

    const myHeaders=new Headers()
    myHeaders.append("Content-Type","application/json")
    myHeaders.append("Authorization",'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTFjNDU0M2QxOWQ3YjcyMDkzODYyZjM2ZWE0OTU3ZCIsIm5iZiI6MTcxNjQ3MjQzOC41Niwic3ViIjoiNjY0ZjRhNzZhYmQ4OWYyMDg3ZWMxNzY2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OYWG_dE1lWmPQcCzumYeMN9Oedst8puAZZn59GMnnFQ')

    const fetchMovieById =(async ()=>{
        const response =await fetch(MOVIES_URL+FETCH_MOVIES_ENDPOINT,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            setMovie(data)
        }
    })
    const {isLoading,error} =useSWR(`https://api.themoviedb.org/movie/${movieId}language=en-US`,fetchMovieById)
    if(isLoading)return <Loading/>
    if(error) return <div>Error fetching movie</div>
    return(
        <div className={"description__page"}>
            <h2>Title: <span className={"movie__title"}>{movie.original_title}</span></h2>
            <div className={"prod__details"}>
                <ul style={{listStyle:"none",marginBottom:"5px"}}>
                    <li>{movie.release_date}</li>
                    <li>{(movie.runtime/60).toString().substring(0,1)} hrs {movie.runtime% 60 } mins</li>
                </ul>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{width: "100%",height:"500px"}} alt={movie.original_title}/>
            <div className={"movie__interests"}>
                <h3>Genres: </h3>
                {movie?.genres?.map((interest, key) => (
                    <div key={key} className={"interest"}>{interest.name}</div>
                ))}
            </div>

            <p>Description: {movie.overview}</p>
            <div className={"ratings"}>
                <p><span className={"rating__star"}> ⭐</span>{movie.vote_average}/10</p>
            </div>
        </div>
    )
}
export default DescriptionPage