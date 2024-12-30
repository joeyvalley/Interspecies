import { useState, useEffect } from "react";

export default function History({ setSelectedItem, setSelectedSubMenu, setSelectedSubItem, menuData }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSelectedItem("About");
    const menuItem = menuData.find(menu => menu.item === "About");
    setSelectedSubMenu(menuItem.subMenu);
    setSelectedSubItem("History");
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column"></div>
      <div className="right-column">
        <h1>History of Interspecies</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, mollitia ut eaque quasi possimus alias similique atque deserunt quam quos illo commodi totam sint hic, corrupti distinctio. Laboriosam, ipsam doloremque.</p>
      </div>
    </div>
  );
}