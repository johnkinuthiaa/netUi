const MovieCard =({title,primaryImage,id})=>{
    const movieCard={
        display:"flex",
        alignItems:"center",
        color:"#fff",
        margin:"10px,0",
        width: "100%",
        backgroundColor:"rgb(66,66,66,100%)",
        gap:"2px"
    }
    const imageStyles ={
        height:"50px",
        width:"100px"
    }
    return(
        <div style={movieCard} id={id}>
            <img alt={title} src={primaryImage} style={imageStyles}/>
            <h3>{title}</h3>
        </div>
    )

}
export default MovieCard