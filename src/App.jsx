import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  )
}

export default App
