import {useState} from "react";
import useSWR from "swr";
import Loading from "../components/Loading.jsx";
import "./styles/descriptions.css"

const DescriptionPage =()=>{
    const URL =window.location.href
    const movieId =URL.match(/[^/]+$/)
    console.log(movieId[0])
    const FETCH_MOVIES_ENDPOINT =`/${movieId}`
    const MOVIES_URL ="https://imdb236.p.rapidapi.com/imdb"

    const [movie,setMovie] =useState({})

    const myHeaders =new Headers()
    // myHeaders.append('x-rapidapi-key','d00a19a430msh8b8a1cc874579dap1e2e57jsnea5aac7757bb')
    // myHeaders.append('x-rapidapi-host', 'imdb236.p.rapidapi.com')
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
    const {isLoading,error} =useSWR(MOVIES_URL+FETCH_MOVIES_ENDPOINT,fetchMovieById)
    if(isLoading)return <Loading/>
    if(error) return <div>Error fetching movie</div>
    return(
        <div className={"description__page"}>
            <h2>Title: <span className={"movie__title"}>{movie.primaryTitle}</span></h2>
            <div className={"prod__details"}>
                <ul>
                    <li>{movie.startYear}</li>
                    <li>{(movie.runtimeMinutes/60).toString().substring(0,1)} hrs {movie.runtimeMinutes% 60 } mins</li>
                </ul>
            </div>
            <img src={movie.primaryImage} style={{width: "100%"}} alt={movie.primaryTitle}/>
            <div className={"movie__interests"}>
                <h3>Genres: </h3>
                {movie.interests.map((interest, key) => (
                    <div key={key} className={"interest"}>{interest}</div>
                ))}
            </div>

            <p>Description: {movie.description}</p>
            <div className={"ratings"}>
                <p><span className={"rating__star"}> ⭐</span>{movie.averageRating}/10</p>
            </div>
        </div>
    )
}
export default DescriptionPage