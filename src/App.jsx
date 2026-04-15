
import Home from "./sections/Home/Home"
import About from "./sections/About/About"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
export default function App()
{
  return<>
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
 
  </>
}