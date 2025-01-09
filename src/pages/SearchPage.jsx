import {useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import "./styles/searchPage.css"
import useSWR from "swr";
import Loading from "../components/Loading.jsx";
import MovieCard from "../components/MovieCard.jsx";
const SearchPage =()=>{
    const[searchMovie,setSearchMovie]=useState("")
    const[topSearches,setTopSearches]=useState([])

    const FETCH_TOP_MOVIES_ENDPOINT ="/most-popular-movies"
    const MOVIES_URL ="https://imdb236.p.rapidapi.com/imdb"

    const myHeaders =new Headers()



    const getLatestMovies =(async ()=>{
        const response =await fetch(MOVIES_URL+FETCH_TOP_MOVIES_ENDPOINT,{
            method:"GET",
            headers:myHeaders
        })
        const data =await response.json()
        setTopSearches(data)
    })
    const { isLoading, error } = useSWR('https://imdb236.p.rapidapi.com/imdb/most-popular-movies', getLatestMovies)
    if(isLoading) return <Loading/>
    if(error) return <div> Error</div>

    return(
        <div className={"searchPage__container"}>
            <div className={"searchBar"}>
                <div className={"searchBar__container"}>
                    <SearchIcon/>
                    <input type={"search"}
                           onChange={(e)=>{
                               setSearchMovie(e.target.value)
                           }}
                           placeholder={"search for a show, movie,genre e.t.c"}/>
                </div>
                <KeyboardVoiceIcon/>

            </div>
            <h3>Top Searches</h3>
            {topSearches.length>1?(
                <div style={{color:"#fff",display:"flex",flexDirection:"column"}}>
                    {topSearches.map((movie)=>(
                        <MovieCard title={movie.title} primaryImage={movie.primaryImage} id={movie.id}/>
                    ))}
                </div>
            ):(
                <div>

                </div>
            )}
            {/*<div>*/}
            {/*    <Loading/>*/}
            {/*</div>*/}
        </div>
    )
}
export default SearchPage