import "./Navbar.css"
export default function Navbar()
{
    return<>
      <div className="navbar">
        <div className="intro">
            <div className="navimage"></div>
        </div>
        <div className="sections">
            <div className="section1"><a href="#home"><label>Home</label></a></div>
            <div className="section1"><a href="#about"><label>ABOUT</label></a></div>
            <div className="section1"><a href="#skills"><label>SKILLS</label></a></div>
            <div className="section1"><a href="#projects"><label>PROJECTS</label></a></div>
            <div className="section1"><a href="#contact"><label>CONTACT-ME</label></a></div>
        </div>
      </div>
    </>
}