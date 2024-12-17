import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/header.css';


export default function Header({ setLooping }) {

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedSubMenu, setSelectedSubMenu] = useState(null)
  const [selectedSubItem, setSelectedSubItem] = useState(null)

  const menuData = [
    {
      item: "About",
      link: "about",
      subMenu: ["History", "Communication Theory", "Contributors"]
    },
    {
      item: "Programs",
      link: "programs",
      subMenu: ["Research", "Field Work", "Art Projects"]
    },
    {
      item: "Library",
      link: "library",
      subMenu: ["Essays", "Interviews", "Recordings", "Video", "Newsletter"]
    },
    {
      item: "Support",
      link: "support"
    },
    {
      item: "Contact",
      link: "contact"
    }
  ]

  const emojis = ["👶🏻", "👶🏽"]

  const handleHomePageClick = () => {
    setSelectedItem(null);
    setSelectedSubMenu(null);
    setSelectedSubItem(null);
    setLooping(true);
  }

  const handleMenuClick = (item) => {
    setSelectedItem(item)
    setSelectedSubItem(null);
    setLooping(false);
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
    setLooping(false);
  }

  const createLink = (item) => {
    return item.toLowerCase().trim().replace(/\s+/g, "-")
  }

  return (
    <header>
      <div className="header-top">
        <div className="header-title" onClick={() => handleHomePageClick()}><Link to="/">Interspecies Communications</Link></div>
        {/* <div className="header-dates">(1970 - 2014)</div> */}
      </div>
      <div className="header-menu">
        {
          menuData.map((menu, index) => (
            <div key={index} className={`menu-section ${selectedItem === menu.item ? "active" : ""}`} onClick={() => handleMenuClick(menu.item)}>
              {menu.link ?
                <Link to={`/${menu.link}`} className={selectedItem === menu.item ? "active" : ""}>{menu.item}</Link>
                :
                menu.item
              }
            </div>
          ))
        }
      </div>
      <div className={`header-submenu ${selectedSubMenu ? "active" : ""}`}>
        {selectedSubMenu ? (
          selectedSubMenu.map((subItem, index) => (
            <div key={index} className={`submenu-section ${selectedSubItem === subItem ? "active" : ""}`} onClick={() => handleSubMenuClick(subItem)}>
              <Link to={`/${createLink(subItem)}`} className={selectedSubItem === subItem ? "active" : ""}>{subItem}</Link>
            </div>
          ))
        ) : null
        }
      </div>
    </header >
  );
}