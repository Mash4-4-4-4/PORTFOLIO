import "./Navbar.css"
export default function Navbar()
{
    return<>
      <div className="navbar">
        <div className="intro">
            <div className="navimage"></div>
        </div>
        <div className="sections">
            <div className="section1"><a href="#"><label>Home</label></a></div>
            <div className="section1"><a href="#"><label>ABOUT</label></a></div>
            <div className="section1"><a href="#"><label>SKILLS</label></a></div>
            <div className="section1"><a href="#"><label>PROJECTS</label></a></div>
            <div className="section1"><a href="#"><label>CONTACT-ME</label></a></div>
        </div>
      </div>
    </>
}