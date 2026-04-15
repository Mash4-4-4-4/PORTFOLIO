import "./Home.css"
import { useState, useEffect } from "react"

export default function Home() {
    const [text, setText] = useState("WEB DEVELOPER");
    const [visible, setVisible] = useState(false);
const [animate, setAnimate] = useState(true);
const [showsidetext,setShowsidetext]=useState(false);
const [showSkillsText, setShowSkillsText] = useState(false);
const[showprojects,setShowprojects]=useState(false);
const [chowcontact,setShowcontact]=useState(false);

useEffect(() => {
    const handleScroll = () => {
        const aboutSection = document.getElementById("about");
        const skillsSection = document.getElementById("skills");
        const projectsSection = document.getElementById("projects");
        const contactSection=document.getElementById("contact");
        if (!aboutSection || !skillsSection || !projectsSection) return;

        const scrollY = window.scrollY;

        const aboutTop = aboutSection.offsetTop;
        const skillsTop = skillsSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        const contactTop=contactSection.offsetTop;

        // 🟢 HOME TEXT
        if (scrollY > 150 && scrollY < aboutTop) {
            setShowsidetext(true);
        } else {
            setShowsidetext(false);
        }

        // 🚀 WHAT I KNOW (AFTER ABOUT → UNTIL PROJECTS)
        if (scrollY > aboutTop+200 && scrollY < projectsTop-600) {
            setShowSkillsText(true);
        } else {
            setShowSkillsText(false);
        }
        if(scrollY>projectsTop+200&& scrollY<contactTop-600)
        {
            setShowprojects(true);
        }
        else{
            setShowprojects(false);
        }

        // show card
        if (scrollY > 150) {
            setVisible(true);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
   return (
    <div className="home" id="home">

        {/* SIDE TEXT (keep it OUTSIDE box for fixed positioning) */}
        <div className={`side-text ${showsidetext ? "visible" : ""}`}>
            <span>KNOW</span>
            <span>ME</span>
            <span>BETTER</span>
        </div>

        <div className={`side-text skills-text ${showSkillsText ? "visible" : ""}`}>
    <span>WHAT</span>
    <span>I</span>
    <span>KNOW</span>
    </div>

         <div className={`side-text projects-text ${showprojects ? "visible" : ""}`}>
    <span>WHAT</span>
    <span>I</span>
    <span>BUILD</span>
    </div>

        <div className={`box ${visible ? "show" : ""}`}>
            {visible && <div className="homeimage"></div>}
            

            <div className="label">
                <span className={animate ? "enter" : "exit"}>
                    {text}
                </span>
            </div>

            <div className="choose">
                <button className="btn">Projects</button>
                <button className="btn">DOWNLOAD CV</button>
            </div>

            <div className="links">
                <a href="https://github.com/Mash4-4-4-4">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/manishka-yadav/#">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>

        </div>
    </div>
);
}