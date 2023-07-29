import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Mininav from "./components/Mininav";



function App() {

  const[menu,setmenu]=useState(false)
  return (
    <>
    <Header menu={menu} setmenu={setmenu}/>
    <Mininav menu={menu} setmenu={setmenu}/>
    <Home/>
    <Work/>
    <Skills/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
