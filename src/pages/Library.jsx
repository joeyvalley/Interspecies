import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";


export default function Library() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column"></div>
      <div className="right-column">
        <h1>Interspecies Library</h1>
        <p>This page is a collection of writings, audio recordings, and videos from the Interspecies archives as well as related content from Interspecies <Link to="/contributors">contributors</Link>.</p>
        <p>The majority of the writing is drawn from essays published in the Interspecies <Link to="/newsletter">newsletter</Link> as well as excerpts from the books of Interspecies founder, Jim Nollman.</p>
        <p>Many of these essays were subsequently published in the United States, Europe, and Japan by a range of newspapers and magazines including <span className="paragraph-italics">Orion</span>, <span className="paragraph-italics">Utne Reader</span>, <span className="paragraph-italics">The Sun</span>, <span className="paragraph-italics">Resurgence</span>, <span className="paragraph-italics">OMNI</span>, <span className="paragraph-italics">NewAge</span>, <span className="paragraph-italics">E!</span>, <span className="paragraph-italics">Outside</span>, <span className="paragraph-italics">BePal</span>, <span className="paragraph-italics">Switch</span>, <span className="paragraph-italics">Spuren</span>, and <span className="paragraph-italics">Actuel</span>. They have also appeared in dozens of book-length anthologies and academic texts.</p>
        <p>RECORDINGS PARAGRAPH ASK JIM</p>
        <p>VIDEO PARAGRAPH ASK JIM</p>
      </div>
    </div>
  );
}