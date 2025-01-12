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

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    myHeaders.append("Authorization", import.meta.env.REACT_APP_TMDB_API_KEY)
    myHeaders.append("Accept","*/*")
    const fetchMovieById =(async ()=>{
        const response =await fetch("https://api.themoviedb.org/movie/1276945?language=en-US",{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            setMovie(data)
        }

    })
    const {isLoading,error} =useSWR("https://api.themoviedb.org/movie/1276945?language=en-US",fetchMovieById)
    if(isLoading)return <Loading/>
    if(error) return <div>Error fetching movie</div>
    return(
        <div className={"description__page"}>
            <h2>Title: <span className={"movie__title"}>{movie.original_title}</span></h2>
            {/*<div className={"prod__details"}>*/}
            {/*    <ul>*/}
            {/*        <li>{movie.release_date}</li>*/}
            {/*        <li>{(movie.runtimeMinutes/60).toString().substring(0,1)} hrs {movie.runtimeMinutes% 60 } mins</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <img src={`https://image.tmdb.org/t/p/original/${movie.belongs_to_collection.poster_path}`} style={{width: "100%"}} alt={movie.original_title}/>
            {/*<div className={"movie__interests"}>*/}
            {/*    <h3>Genres: </h3>*/}
            {/*    {movie.interests.map((interest, key) => (*/}
            {/*        <div key={key} className={"interest"}>{interest}</div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <p>Description: {movie.overview}</p>
            <div className={"ratings"}>
                <p><span className={"rating__star"}> ⭐</span>{movie.vote_average}/10</p>
            </div>
        </div>
    )
}
export default DescriptionPage