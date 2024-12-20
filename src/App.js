import React from "react";
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Services from './Components/Services/Services'
import Issues from './Components/Issues/Issues'
import Process from './Components/Process/Process'
import Reviews from './Components/Reviews/Reviews'
import Marketing from './Components/Marketing/Marketing'
import Footer from './Components/Footer/Footer'

const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Services/>
        <Footer/>
        </>
    )
}
export default App