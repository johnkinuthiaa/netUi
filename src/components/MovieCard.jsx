import {useNavigate} from "react-router";
import DescriptionPage from "../pages/DescriptionPage.jsx";

const MovieCard =({title,primaryImage,id})=>{
    const movieCard={
        display:"flex",
        alignItems:"center",
        color:"#fff",
        margin:"5px",
        width: "98%",
        backgroundColor:"rgb(66,66,66,100%)",
        gap:"2px",
        cursor:"pointer"

    }
    const imageStyles ={
        height:"250px",
        width:"220px"
    }
    const navigate =useNavigate()
    return(
        <div style={movieCard} id={id} onClick={()=>navigate(`/description/${id}`)}>
            <img alt={title} src={`https://image.tmdb.org/t/p/original/${primaryImage}`} style={imageStyles}/>
            <h3 style={{backgroundColor:"transparent",marginLeft:"10px"}}>{title}</h3>
        </div>
    )

}
export default MovieCard