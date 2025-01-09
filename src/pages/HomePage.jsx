import HomeNavbar from "../components/HomeNavbar.jsx";
import "./styles/homepage.css"
import BottomNav from "../components/BottomNav.jsx";
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import Previews from "../components/Previews.jsx";
import MovieContainer from "../components/MovieContainer.jsx";
const HomePage =()=>{

    return(
        <div className={"homeContainer"}>
            <HomeNavbar/>
            <div>
                <img src={"src/assets/homeImage.svg"} className={"homeImage"}/>
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
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                    <Previews/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Trending Now</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Top 10 in kenya Today</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>My List</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Netflix Originals</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>New Releases</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>TV Thrillers & Mysteries</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <div className={"trending"} style={{display: "flex", flexDirection: "column", color: "#fff"}}>
                <h2>Us Tv shows</h2>
                <div style={{display: "flex", overflow: "scroll", scrollBehavior: "smooth", scrollbarWidth: "none"}}>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                    <MovieContainer url={"https://dog.ceo/api/breeds/image/random"}/>
                </div>
            </div>
            <BottomNav/>
        </div>
    )
}
export default HomePage