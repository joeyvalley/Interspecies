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
          <li onClick={() => handleSelection("677d79d53d0b7942668bfbcd")}>April</li>
          <li onClick={() => handleSelection("677d79d53d0b7942668bfbd2")}>May</li>
          <li>June</li>
          <li>July</li>
          <li>August</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
        <h2>2006</h2>
        <ul>
          <li>January</li>
          <li>February</li>
          <li>March</li>
          <li>April</li>
          <li>May</li>
          <li>June</li>
          <li>July</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
        <h2>2007</h2>
        <ul>
          <li>October</li>
          <li>December</li>
        </ul>
        <h2>2008</h2>
        <ul>
          <li>January</li>
          <li>April</li>
          <li>June</li>
          <li>October</li>
          <li>December</li>
        </ul>
        <h2>2009</h2>
        <ul>
          <li>February</li>
          <li>April</li>
          <li>June</li>
        </ul>
      </div>
    </div>
  );
}