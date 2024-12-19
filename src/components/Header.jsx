import { useState, useEffect, use } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/header.css';


export default function Header({ setLooping }) {

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedSubMenu, setSelectedSubMenu] = useState(null)
  const [selectedSubItem, setSelectedSubItem] = useState(null)

  const [firstLetter, setFirstLetter] = useState("I");
  const [secondLetter, setSecondLetter] = useState("n");
  const [thirdLetter, setThirdLetter] = useState("t");
  const [fourthLetter, setFourthLetter] = useState("e");
  const [fifthLetter, setFifthLetter] = useState("r");
  const [sixthLetter, setSixthLetter] = useState("s");
  const [seventhLetter, setSeventhLetter] = useState("p");
  const [eighthLetter, setEighthLetter] = useState("e");
  const [ninthLetter, setNinthLetter] = useState("c");
  const [tenthLetter, setTenthLetter] = useState("i");
  const [eleventhLetter, setEleventhLetter] = useState("e");
  const [twelfthLetter, setTwelfthLetter] = useState("s");
  const setters = [
    setFirstLetter,
    setSecondLetter,
    setThirdLetter,
    setFourthLetter,
    setFifthLetter,
    setSixthLetter,
    setSeventhLetter,
    setEighthLetter,
    setNinthLetter,
    setTenthLetter,
    setEleventhLetter,
    setTwelfthLetter,
  ];

  const [delayTime, setDelayTime] = useState(10000);

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

  const randomText = [
    {
      target: "firstLetter",
      options: ["I", "𝐼", "ί", "ᓰ", "𝙸", "ᴵ", "ɪ", "𝓘", "ꪱׁׅ"]
    }, {
      target: "secondLetter",
      options: ["n", "𝐧", "𝑛", "𝒏", "𝓃", "𝓷", "𝔫", "𝕟", "𝗻", "𝘯", "𝙣", "𝚗", "ɴ"]
    }, {
      target: "thirdLetter",
      options: ["t", "𝐭", "𝑡", "𝒕", "𝓉", "𝓽", "𝔱", "𝕥", "𝖙", "𝗍", "𝘁", "𝘵", "𝙩", "𝚝"]
    }, {
      target: "fourthLetter",
      options: ["e", "𝐞", "𝑒", "𝒆", "𝓮", "𝔢", "𝕖", "𝖊", "𝗲", "𝘦", "𝙚", "𝚎"]
    }, {
      target: "fifthLetter",
      options: ["r", "𝐫", "𝑟", "𝒓", "𝓇", "𝓻", "𝔯", "𝕣", "𝖗", "𝗋", "𝘳", "𝙧", "𝚛"]
    }, {
      target: "sixthLetter",
      options: ["s", "𝐬", "𝑠", "𝒔", "𝓈", "𝓼", "𝔰", "𝕤", "𝖘", "𝗌", "𝘀", "𝘴", "𝚜"]
    }, {
      target: "seventhLetter",
      options: ["p", "𝐩", "𝑝", "𝒑", "𝓅", "𝓹", "𝔭", "𝕡", "𝖕", "𝗉", "𝗽", "𝘱", "𝙥", "𝚙"]
    }, {
      target: "eighthLetter",
      options: ["e", "𝐞", "𝑒", "𝒆", "𝓮", "𝔢", "𝕖", "𝖊", "𝗲", "𝘦", "𝙚", "𝚎"]
    }, {
      target: "ninthLetter",
      options: ["c", "𝐜", "𝑐", "𝒸", "𝓬", "𝓬", "𝔠", "𝕔", "𝖈", "𝗰", "𝘤", "𝙘", "𝚌", "ⓒ"]
    }, {
      target: "tenthLetter",
      options: ["i", "𝐢", "𝑖", "𝒾", "𝓲", "𝓲", "𝔦", "𝕚", "𝖎", "𝗶", "𝘪", "𝙞", "𝚒", "𝔦"]
    }, {
      target: "eleventhLetter",
      options: ["e", "𝐞", "𝑒", "𝒆", "𝓮", "𝔢", "𝕖", "𝖊", "𝗲", "𝘦", "𝙚", "𝚎"]
    }, {
      target: "twelfthLetter",
      options: ["s", "𝐬", "𝑠", "𝒔", "𝓈", "𝓼", "𝔰", "𝕤", "𝖘", "𝗌", "𝘀", "𝘴", "𝚜"]
    }
  ]
  // const randomEmoji = [
  //   {
  //     options: ["👶🏻", "🧒🏾", "👦🏼", "👧🏿", "🧑🏻", "👱🏽", "👨🏾", "🧔🏾", "👨🏿‍🦱", "👨🏻‍🦲", "👩🏼", "🧑🏻‍🦰", "👩🏾‍🦱", "👩🏻‍🦳", "👱🏽‍♀️", "👵🏿", "🧓🏾", "🧕🏽", "👳🏾‍♂️", "👳🏿‍♀️", "👳🏽‍♀️", "👁️"]
  //   },
  //   {
  //     options: ["🦧", "🫏", "🦓", "🐏", "🐫", "🦒", "🐀", "🦔", "🦨", "🦡", "🦃", "🦆", "🦢", "🦤", "🦚", "🦜", "🦎", "🐋", "🐬", "🦭", "🐡", "🦈", "🪸", "🪼", "🐌", "🦋", "🪲", "🦗", "🦟", "🪱", "🍄", "🌳", "🌲", "🌴"]
  //   }
  // ]

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

  const randomizeText = () => {
    const letterToSwap = Math.floor(Math.random() * 12)
    let swappedLetter = ""
    swappedLetter = randomText[letterToSwap].options[Math.floor(Math.random() * randomText[letterToSwap].options.length)]
    setters[letterToSwap](swappedLetter);
    setDelayTime(Math.floor(Math.random() * 5000) + 100)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      randomizeText();
    }, delayTime);

    return () => {
      clearInterval(interval);
    };
  })

  return (
    <header>
      <div className="header-top">
        <div className="header-title" onClick={() => handleHomePageClick()}>
          <Link to="/">
            {firstLetter}{secondLetter}{thirdLetter}{fourthLetter}{fifthLetter}{sixthLetter}{seventhLetter}{eighthLetter}{ninthLetter}{tenthLetter}{eleventhLetter}{twelfthLetter}
          </Link>
        </div>
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