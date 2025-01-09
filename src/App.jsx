
import './App.css'
import WelcomePage from "./pages/WelcomePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Route, Router, Routes} from "react-router";
import SearchPage from "./pages/SearchPage.jsx";
import DescriptionPage from "./pages/DescriptionPage.jsx";
import More from "./pages/More.jsx";
import Downloads from "./pages/Downloads.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

function App() {


  return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/search"} element={<SearchPage/>}/>
            <Route path={"/welcome"} element={<WelcomePage/>}/>
            <Route path={"/description"} element={<DescriptionPage/>}/>
            <Route path={"/more"} element={<More/>}/>
            <Route path={"/comingSoon"} element={<ComingSoon/>}/>
            <Route path={"/downloads"} element={<Downloads/>}/>
        </Routes>
  )
}

export default App
