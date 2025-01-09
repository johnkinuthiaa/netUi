import "./navbar.css"
const HomeNavbar =()=>{
    const navItems ={

    }
    return(
        <header>
            <nav>
                <ul className={"nav__items"} style={navItems} >
                    <img src={"src/assets/logo.svg"}/>
                    <h3>TV Shows</h3>
                    <h3>Movies</h3>
                    <h3>My List</h3>
                </ul>
            </nav>
        </header>
    )
}
export default HomeNavbar