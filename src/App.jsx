
import Home from "./sections/Home/About/Home/Home"
import Navbar from "./components/navbar/Navbar/Navbar"
import About from "./sections/Home/About/About/About"
import Skills from "./sections/Home/About/Skills/Skills"
import Projects from "./sections/Home/About/Projects/Projects"
import Contact from"./sections/Home/About/Contact/Contact"
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