import React, { useState, useEffect } from "react"
import Contact from './Components/contact/Contact'
import Details from "./Components/Information/Details"
import Intro from './Components/intro/Intro'
import Portfolio from './Components/portfolio/Portfolio'
import Topbar from './Components/topbar/Topbar'
import Education from "./Components/Education_Experience/Education"
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.scss"

const App = () => {
    let [loading, setLoading] = useState(true);    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, []);
    return (<div className='app'>
        {
            loading ? (
                <PacmanLoader
                    color={"#c9184a"}
                    loading={loading}
                    size={80}
                />
            ) : (
                <><Topbar />
                    <div className="section-component">
                        <Intro />
                        <Contact />
                        <Details />
                        <Portfolio />
                        <Education />
                    </div>
                </>
            )
        }
    </div >)
}

export default App