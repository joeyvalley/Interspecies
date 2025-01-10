import { useState, useEffect } from "react";
import { getNewsletterEntry } from "../../api/getNewsletter";

export default function Newsletter({ setSelectedItem, setSelectedSubMenu, setSelectedSubItem, menuData }) {

  const [isVisible, setIsVisible] = useState(false);
  const [newsletterData, setNewsletterData] = useState(null);

  useEffect(() => {
    setSelectedItem("Library");
    const menuItem = menuData.find(menu => menu.item === "Library");
    setSelectedSubMenu(menuItem.subMenu);
    setSelectedSubItem("Newsletter");
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  async function handleSelection(id){
    const data = await getNewsletterEntry(id);
    setNewsletterData(data);
  }

  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column">
      {newsletterData && (
                  <div>
                    <h1>{newsletterData.month} {newsletterData.year}</h1>
                    <div>
                      {newsletterData.articles.map(article => (
                        <div key={article._id}>
                          <h2>{article.title} {article.subtitle && <span className="subtitle">{article.subtitle}</span>}</h2>
                          {article.content.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
            )}
      </div>
      <div className="right-column">
        <h1>Interspecies Newsletter</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, mollitia ut eaque quasi possimus alias similique atque deserunt quam quos illo commodi totam sint hic, corrupti distinctio. Laboriosam, ipsam doloremque.</p>
        <h2>2005</h2>
        <ul>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c4bf")}>April</li>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c4c4")}>May</li>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c4ca")}>June</li>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c4cf")}>July</li>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c512")}>August</li>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c51d")}>September</li>
          <li onClick={() => handleSelection("677ed60141d949c8b1e7c527")}>October</li>
        </ul>
        <h2>2006</h2>
        <ul>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4d4")}>January</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4e3")}>March</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4e9")}>April</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4f3")}>May</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4f7")}>June</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c521")}>September</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c52c")}>October</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c533")}>November</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c538")}>December</li>
        
        </ul>
        <h2>2007</h2>
        <ul>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c50b")}>September</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c53d")}>December</li>
        </ul>
   
        <h2>2008</h2>
        <ul>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4d8")}>January</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c504")}>April/May</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4fc")}>June</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c518")}>October</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c544")}>November</li>
        </ul>
        <h2>2009</h2>
        <ul>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4de")}>February/March</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c4ef")}>April</li>
        <li onClick={() => handleSelection("677ed60141d949c8b1e7c500")}>August</li>
        
        </ul>
      </div>
    </div>
  );
}