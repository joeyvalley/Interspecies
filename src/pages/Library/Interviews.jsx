import { useState, useEffect } from "react";

export default function Interviews({ setSelectedItem, setSelectedSubMenu, setSelectedSubItem, menuData }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSelectedItem("Library");
    const menuItem = menuData.find(menu => menu.item === "Library");
    setSelectedSubMenu(menuItem.subMenu);
    setSelectedSubItem("Interviews");
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column"></div>
      <div className="right-column">
        <h1>Interviews</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, mollitia ut eaque quasi possimus alias similique atque deserunt quam quos illo commodi totam sint hic, corrupti distinctio. Laboriosam, ipsam doloremque.</p>
      </div>
    </div>
  );
}