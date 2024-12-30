import { useState, useEffect } from "react";

export default function Art({ setSelectedItem, setSelectedSubMenu, setSelectedSubItem, menuData }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSelectedItem("Programs");
    const menuItem = menuData.find(menu => menu.item === "Programs");
    setSelectedSubMenu(menuItem.subMenu);
    setSelectedSubItem("Art Projects");
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column"></div>
      <div className="right-column">
        <h1>Art Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, mollitia ut eaque quasi possimus alias similique atque deserunt quam quos illo commodi totam sint hic, corrupti distinctio. Laboriosam, ipsam doloremque.</p>
      </div>
    </div>
  );
}