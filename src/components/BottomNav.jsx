import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import "./styles/bottomNav.css"
import {useNavigate} from "react-router";
const BottomNav =()=>{
    const navigate =useNavigate()
    return(
        <div className={"bottom__nav"}>
            <nav >
                <ul>
                    <li>
                        <div onClick={()=>navigate("/")}>
                            <HomeIcon/>
                            <h4>Home</h4>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>navigate("/search")}>
                            <SearchIcon/>
                            <h4>Search</h4>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>navigate("/comingSoon")}>
                            <VideoLibraryIcon/>
                            <h4>Coming soon </h4>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>navigate("/downloads")}>
                            <DownloadIcon/>
                            <h4>Downloads</h4>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>navigate("/more")}>
                            <MenuIcon/>
                            <h4>More</h4>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default BottomNav