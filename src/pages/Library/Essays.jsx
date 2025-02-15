import { useState, useEffect } from "react";
import { getAllEssays } from "../../api/getEssay";


export default function Essays({ setSelectedItem, setSelectedSubMenu, setSelectedSubItem, menuData }) {

  const [isVisible, setIsVisible] = useState(false);
  const [essayList, setEssayList] = useState([]);
  const [selectedEssay, setSelectedEssay] = useState(null);

  useEffect(() => {

    const fetchEssays = async () => {
      const essays = await getAllEssays();
      setEssayList(essays);
    };

    setSelectedItem("Library");
    const menuItem = menuData.find(menu => menu.item === "Library");
    setSelectedSubMenu(menuItem.subMenu);
    setSelectedSubItem("Essays");
    fetchEssays();
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

function handleSelection(essay){
      setSelectedEssay(essay);
      console.log("Selected essay:", essay);
}

  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column">
      {selectedEssay && (
        <div>
          <h1>{selectedEssay.title}</h1>
          {selectedEssay.sections.map((section) => (
            <div key={section.position}>
              <h2>{section.title}</h2>
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p className="butt">&copy; {selectedEssay.author}{selectedEssay.year ? `, ${selectedEssay.year}` : null}</p>
        </div>
      )}
      </div>
      <div className="right-column">
        <h1>Essays</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, mollitia ut eaque quasi possimus alias similique atque deserunt quam quos illo commodi totam sint hic, corrupti distinctio. Laboriosam, ipsam doloremque.</p>
        <ul>
        {essayList.length > 0 ? (
            essayList.map((essay, index) => (
              <li onClick={() => handleSelection(essay)} key={index}>
              {essay.title} 
            </li>
            ))
          ) : (
            null
          )}
        </ul>
      </div>
    </div>
  );
}