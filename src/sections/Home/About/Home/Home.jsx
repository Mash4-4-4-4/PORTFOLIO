import "./Home.css"
import { useState,useEffect, use } from "react"
export default function Home()
{
    const[text,setText]=useState("WEB DEVELOPER");

    useEffect(()=>{
        const words=["WEB DEVELOPER","LEARNER","FREELANCER"]
    let i=0;
    const interval=setInterval(()=>
    {
        i=(i+1)%words.length;
        setText(words[i]);
    },1000);
        return ()=> clearInterval(interval);
    },[]);

    return<>
     <div className="home">
        <div className="box">
            <div className="homeimage"></div>
            <div className="label">
                <span>{text}</span>
            </div>
            <div className="choose">
                <div className="project">
                <button className="btn">Projects</button>
                </div>
                <div className="cv">
                    <button className="btn">DOWNLOAD CV</button>
                </div>
            </div>
            <div className="links">
                <div className="github">
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="linkedin">
                     <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="email">
                   <a href="#"> <i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>

     </div>
    </>
}