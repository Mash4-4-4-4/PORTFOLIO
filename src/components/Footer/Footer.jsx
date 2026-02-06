import "./Footer.css"
export default function Footer()
{
    return<>
     <div className="footer">
      <div className="upper">
      <div className="left">
        <p className="name">MANISHKA</p>
        <div className="intro">
        <p><strong>Frontend Developer</strong></p>
        <p>Building intelligent, real-world products</p>
        </div>
        <div className="list">
          <div className="github"><a href="#" className="links" id="git"><i className="fa-brands fa-github"></i></a></div>
          <div className="linkedin"><a href="#" className="links" id="linkedin"><i className="fa-brands fa-linkedin"></i></a></div>
          <div className="email"><a href="#" className="links" id="email"><i className="fa-solid fa-envelope"></i></a></div>
        </div>
        <p className="copyrights">© 2026 Mash Yadav. All rights reserved.</p>
      </div>

      <div className="right">
        <div className="Navigation">
          <div className="sections">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">skills</a>
          <a href="#">projects</a>
          <a href="#">contactMe</a>
          
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
}