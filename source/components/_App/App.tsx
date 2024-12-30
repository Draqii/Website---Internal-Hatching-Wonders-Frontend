import React, { useState } from "react";
import useCookie, { setItem } from "../../modules/hooks/useCookie";
import { setClass } from "../../modules/setClass";
import { Footer, Header, Icon, Main } from "da-awesome-library/build"
import { NavLink, Route, Routes } from "react-router-dom";
import { NiteSwitch } from "niteswitch"
import pageicon from "../../../public/favicon/page_icon.png"
import HomeIcon from "../../../public/svgs/home.svg"
import Home from "../p_Home/Home";
import Clocking from "../p_Clocking/Clocking";
import Projects from "../p_Projects/Projects";
import LogIn from "../p_LogIn/LogIn";
import Logout from "../p_Logout/Logout";
import "./App.scss";
import Project from "../p_Project/Project";
import Test from "../p_Test/Test";

const App = ({}: any) => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0] === "light")
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])
    const [loggedIn, setLoggedIn]: any = useState(useCookie("hw_login", "no")[0])

    const updateTheme = (isLight) => {
        setItem("hw_lightmode", isLight ? "light" : "dark", 360)
        setTheme(isLight)
    }
    
    const updateLanguage = (language) => {
        setItem("hw_language", language, 360)
        setLanguage(language)
    }

    const unloggedLinks = [
        {to: "/", content: "Login"},
    ]
    
    const loggedLinks = [
        {to: "/", content: <Icon ReactSVG={HomeIcon} />},
        {to: "/clocking", content: "Clocking"},
        {to: "/projects", content: "Projects"},
        {to: "/logout", content: "Log Out"}
    ]

    const getTheme = () => theme ? "light" : "dark"
    const getLoggedIn = () => loggedIn === "no" ? false : true

    return (
        <div className={setClass("hw_page", [getTheme()])}>
            <NiteSwitch 
                enabled={theme ? true : false} 
                _setEnabled={setTheme}
                onEnable={() => updateTheme(true)} 
                onDisable={() => updateTheme(false)}
            />

            <Header 
                theme={getTheme()} 
                ReactLink={NavLink}
                navigation_links={loggedIn !== "no" ? loggedLinks : unloggedLinks}
                logo_image={pageicon} 
                logo_text={
                <span>
                    <span>Hatching</span>
                    <br/>
                    <span className="hw_logo__secondary">Wonders</span>
                </span>}
            />

            <Main>
                <Routes>
                    <Route 
                        path="/test" 
                        element={<Test theme={getTheme()} />} 
                    />
                    <Route 
                        path="/" 
                        Component={() => getLoggedIn() 
                            ? <Home theme={getTheme()} /> 
                            : <LogIn 
                            theme={getTheme()} 
                            loggedIn={loggedIn} 
                            setLoggedIn={setLoggedIn} />} 
                    />

                    <Route 
                        path="/clocking" 
                        Component={() => getLoggedIn() 
                            ? <Clocking 
                                loggedUID={loggedIn} 
                                theme={getTheme()} /> 
                            : <LogIn 
                                theme={getTheme()} 
                                loggedIn={loggedIn} 
                                setLoggedIn={setLoggedIn} />} 
                    />

                    <Route 
                        path="/projects" 
                        Component={() => getLoggedIn() 
                            ? <Projects theme={getTheme()} /> 
                            : <LogIn 
                                theme={getTheme()} 
                                loggedIn={loggedIn} 
                                setLoggedIn={setLoggedIn} />} 
                    />

                    <Route 
                        path="/projects/:mode/:project_id"
                        Component={() => getLoggedIn() 
                            ? <Project theme={getTheme()} /> 
                            : <LogIn 
                                theme={getTheme()} 
                                loggedIn={loggedIn} 
                                setLoggedIn={setLoggedIn} />} 
                    />

                    <Route
                        path="/logout" 
                        Component={() => !getLoggedIn() 
                            ? <Home theme={getTheme()} /> 
                            : <Logout 
                                theme={getTheme()} 
                                setLoggedIn={setLoggedIn} />} 
                    />
                </Routes>
            </Main>

            <Footer 
                theme={getTheme()} 
                copyrightHolder={"Hatching Wonders"} 
                copyrightYear={"2022-2024"} 
                ReactLink={NavLink} 
                navigation_links={[]} />
        </div>
    )
}

export default App