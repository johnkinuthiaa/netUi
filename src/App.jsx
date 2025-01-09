
import './App.css'
import WelcomePage from "./pages/WelcomePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Route, Router, Routes} from "react-router";
import SearchPage from "./pages/SearchPage.jsx";

function App() {


  return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/search"} element={<SearchPage/>}/>
            <Route path={"/welcome"} element={<WelcomePage/>}/>
        </Routes>
  )
}

export default App
