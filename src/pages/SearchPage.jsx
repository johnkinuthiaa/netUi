import {useState} from "react";
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
    const SEARCH_ENDPOINT =`/search?originalTitle=${searchMovie}&sortField=id&sortOrder=ASC`

    const myHeaders =new Headers()
    myHeaders.append('x-rapidapi-key','d00a19a430msh8b8a1cc874579dap1e2e57jsnea5aac7757bb')
    myHeaders.append('x-rapidapi-host', 'imdb236.p.rapidapi.com')

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

    const getSearchMovie =(async ()=>{
        const response =await fetch(MOVIES_URL+SEARCH_ENDPOINT,{
            headers:myHeaders
        })
        const data =await response.json()
        setTopSearches(data.results)
    })

    return(
        <div className={"searchPage__container"}>
            <div className={"searchBar"}>
                <div className={"searchBar__container"}>
                    <div className={"keyboard__icon"}>
                        <SearchIcon/>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        getSearchMovie()
                    }}>
                        <input type={"search"}
                               onChange={(e) => {
                                   setSearchMovie(e.target.value)
                               }}
                               placeholder={"search for a show, movie,genre e.t.c"}/>
                    </form>

                </div>
                <div className={"keyboard__icon"}>
                    <KeyboardVoiceIcon/>
                </div>


            </div>
            <h3 style={{margin: "20px 20px 20px 5px"}}>Top Searches</h3>
            {topSearches.length > 1 ? (
                <div style={{
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                    overflow: "scroll",
                    width: "100%"
                }}>
                    {topSearches.map((movie) => (
                        <MovieCard title={movie.title || movie.originalTitle} primaryImage={movie.primaryImage}
                                   id={movie.id}/>
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