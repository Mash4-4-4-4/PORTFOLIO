import "./Projects.css"
export default function Projects()
{
    const openLink=(url)=>
    {
        window.open(url,"_blank");
    };
 return<>
 <div id="projects" className="projects">
    <div className="proheading">
    <h2>Projects</h2>
    </div>
    <div className="probox">
        <div className="project1">
            <div className="upperpro">
            <div className="proimage"></div>
            <div className="prodesc">
<p>The **Disease Detection System** takes basic health details as input and predicts whether a person may have a particular disease, helping them understand their condition early.
                     </p>
            </div>
            </div>
            <div className="btns">
                <button onClick={()=>openLink("https://disease-detection-system-production.up.railway.app/")} className="probtn">Go-live</button>
                <button onClick={()=>openLink("https://github.com/Mash4-4-4-4/Disease-Detection-System")} className="probtn">Code</button>
            </div>
            </div>
        

         <div className="project1">
            <div className="upperpro">
            <div className="proimage"></div>
            <div className="prodesc">
                <p>The **Disease Detection System** takes basic health details as input and predicts whether a person may have a particular disease, helping them understand their condition early.</p>
            </div>
            </div>
            <div className="btns">
                <button className="probtn">Go-live</button>
                <button className="probtn">Code</button>
            </div>
            </div>


    </div>
 </div>
 </>
}