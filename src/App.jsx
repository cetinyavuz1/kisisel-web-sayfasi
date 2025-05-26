import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { dataContext } from "./contexts/context";

function App() {

  const { darkMode } = useContext(dataContext);

  return (
    <>
      <div className={darkMode ? "" : "dark-mode"} >
        <Header />
        <Intro />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
