import {useNavigate} from "react-router";

const MovieCard =({title,primaryImage,id})=>{
    const movieCard={
        display:"flex",
        alignItems:"center",
        color:"#fff",
        margin:"5px",
        width: "100%",
        backgroundColor:"rgb(66,66,66,100%)",
        gap:"2px"
    }
    const imageStyles ={
        height:"250px",
        width:"220px"
    }
    const navigate =useNavigate()
    return(
        <div style={movieCard} id={id} onClick={()=>navigate()}>
            <img alt={title} src={primaryImage} style={imageStyles}/>
            <h3 style={{backgroundColor:"transparent",marginLeft:"10px"}}>{title}</h3>
        </div>
    )

}
export default MovieCard