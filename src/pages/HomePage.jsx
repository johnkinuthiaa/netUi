import HomeNavbar from "../components/HomeNavbar.jsx";
import "./styles/homepage.css"
import BottomNav from "../components/BottomNav.jsx";
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Previews from "../components/Previews.jsx";
import MovieContainer from "../components/MovieContainer.jsx";
import {useEffect, useState} from "react";
const HomePage =()=>{
    const [country,setCountry] =useState("")
    const [regionName,setRegionName] =useState("")
    useEffect(() => {
        getLocation()
    }, []);
    const getLocation =(async()=>{
        const response =await fetch("http://ip-api.com/json/")
        const data =await response.json()
        if(data.status ==="success"){
            setCountry(data.country)
            setRegionName(data.regionName)
        }
    })
    return(
        <div className={"homeContainer"}>
            <HomeNavbar/>
            <div>
                <img src={"https://github.com/johnkinuthiaa/netUi/blob/main/src/assets/homeImage.svg"}
                     className={"homeImage"}/>
            </div>
            <div className={"play"}>
                <div>
                    <AddIcon/>
                    <p>My List</p>
                </div>
                <div className={"button"}>
                    <button><PlayArrowIcon/><h3>Play</h3></button>
                </div>
                <div>
                    <InfoIcon/>
                    <p>Info</p>
                </div>
            </div>
            <div className={"previews"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Previews</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <Previews url={""}/>

                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Trending Now</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer
                        url={"https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=2&sort_by=popularity.desc"}/>

                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Top 20 in {country?country:"your"} Today</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://api.themoviedb.org/3/movie/popular?language=en-US&page=2"}/>

                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>My List</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={""}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Top Rated Series</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>New Releases</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://api.themoviedb.org/3/trending/all/day?language=en-US"}/>

                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>TV Thrillers & Mysteries</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://api.themoviedb.org/3/search/movie?query=thriller&include_adult=true&language=en-US&page=1"}/>

                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Us Tv shows</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1"}/>
                </div>
            </div>
            <div className={"bottom"} style={{marginBottom:"70px"}}></div>
            <BottomNav/>
        </div>
    )
}
export default HomePage