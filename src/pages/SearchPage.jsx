import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const SearchPage =()=>{
    const{searchMovie,setSearchMovie} =useState([])
    return(
        <div className={"searchPage__container"}>
            <div className={"searchBar"}>
                <SearchIcon/>
                <input type={"search"}
                       onChange={(e)=>setSearchMovie(e.target.value)}
                       placeholder={"search for a show, movie,genre e.t.c"}/>
                <KeyboardVoiceIcon/>

            </div>
            <h3>Top Searches</h3>

        </div>
    )
}
export default SearchPage