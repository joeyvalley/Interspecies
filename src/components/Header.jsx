import { useState } from "react";

import '../styles/header.css';


export default function Header() {

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedSubMenu, setSelectedSubMenu] = useState(null)
  const [selectedSubItem, setSelectedSubItem] = useState(null)

  const menuData = [
    {
      item: "About",
      subMenu: ["History", "Communication Theory", "Contributors"]
    },
    {
      item: "Programs",
      subMenu: ["Research", "Field Work", "Art Projects"]
    },
    {
      item: "Library",
      subMenu: ["Essays", "Interviews", "Recordings", "Video", "Newsletter"]
    },
    {
      item: "Support"
    },
    {
      item: "Contact"
    }
  ]

  const handleMenuClick = (item) => {
    setSelectedItem(item)
    setSelectedSubItem(null);
    let selectedMenu = menuData.find(menu => menu.item === item)
    if (selectedMenu && Array.isArray(selectedMenu.subMenu)) {
      setSelectedSubMenu(selectedMenu.subMenu)
    }
    else {
      setSelectedSubMenu(null)
    }
  };

  const handleSubMenuClick = (item) => {
    setSelectedSubItem(item)
  }

  return (
    <header>
      <div className="header-top">
        <div className="header-title">INTERSPECIES</div>
        <div className="header-dates">(1970 - 2014)</div>
      </div>
      <div className="header-menu">
        {
          menuData.map((menu, index) => (
            <div key={index} className={`menu-section ${selectedItem === menu.item ? "active" : ""}`} onClick={() => handleMenuClick(menu.item)}>
              {menu.item}
            </div>
          ))
        }
      </div>
      <div className={`header-submenu ${selectedSubMenu ? "active" : ""}`}>
        {selectedSubMenu ? (
          selectedSubMenu.map((subItem, index) => (
            <div key={index} className={`submenu-section ${selectedSubItem === subItem ? "active" : "collapsed"}`} onClick={() => handleSubMenuClick(subItem)}>
              {subItem}
            </div>
          ))
        ) : null
        }
      </div>
    </header>
  );
}