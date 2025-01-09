import {useEffect, useState} from "react";
import useSWR from "swr";

const MovieContainer =({url})=>{
    useEffect(() => {
        fetchMovies(url)
    }, []);
    const[movie,setMovies] =useState([])
    const fetchMovies =(async (url)=>{
        const response =await fetch(url)
        const data =await response.json()
        setMovies(data.message)
    })

    return(
        <div style={{display:"flex",marginLeft:"10px"}}>
            {movie.length>1?(
                <div><img src={movie}  style={{display:"flex", width:"200px",height:"250px",borderRadius:"10px"}}/>
                </div>
            ) : (
                <div>
                    <img src={movie[0]}/>
                </div>
            )}
        </div>
    )
}
export default MovieContainer