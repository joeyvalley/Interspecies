
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Support from './pages/Support';
import Contact from './pages/Contact';

import About from './pages/About';
import Contributors from './pages/About/Contributors';
import History from './pages/About/History';
import Theory from './pages/About/Theory';

import Library from './pages/Library';
import Essays from './pages/Library/Essays';
import Interviews from './pages/Library/Interviews';
import Newsletter from './pages/Library/Newsletter';
import Recordings from './pages/Library/Recordings';
import Video from './pages/Library/Video';

import Programs from './pages/Programs';
import Art from './pages/Programs/Art';
import Field from './pages/Programs/Field';
import Research from './pages/Programs/Research';


import Header from './components/Header';
// import VideoBackground from './components/VideoBackground';

import './styles/global.css';

function App() {

  const [looping, setLooping] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null) // Tells us which menu item is selected, if any
  const [selectedSubMenu, setSelectedSubMenu] = useState(null) // Tells us if the selected menu item has a submenu
  const [selectedSubItem, setSelectedSubItem] = useState(null) // Tells us which submenu item is selected, if any


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

  const setSelectedMenuItem = (value) => {
    setSelectedItem(value);
  }

  const doesSelectedItemHaveSubMenu = (value) => {
    setSelectedSubMenu(value);
  }

  const setSelectedSubMenuItem = (value) => {
    setSelectedSubItem(value);
  }

  const toggleVideo = (value) => {
    setLooping(value);
  };



  return (
    <div className="container">
      <Header setLooping={toggleVideo} selectedItem={selectedItem} selectedSubMenu={selectedSubMenu} selectedSubItem={selectedSubItem} setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} menuData={menuData} />} />
        <Route path="/history" element={<History setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/communication-theory" element={<Theory setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/contributors" element={<Contributors setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/programs" element={<Programs setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} menuData={menuData} />} />
        <Route path="/research" element={<Research setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/field-work" element={<Field setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/art-projects" element={<Art setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/library" element={<Library setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} menuData={menuData} />} />
        <Route path="/essays" element={<Essays setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/interviews" element={<Interviews setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/recordings" element={<Recordings setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/video" element={<Video setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/newsletter" element={<Newsletter setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} setSelectedSubItem={setSelectedSubMenuItem} menuData={menuData} />} />
        <Route path="/support" element={<Support setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} menuData={menuData} />} />
        <Route path="/contact" element={<Contact setSelectedItem={setSelectedMenuItem} setSelectedSubMenu={doesSelectedItemHaveSubMenu} menuData={menuData} />} />
      </Routes>
      {/* <VideoBackground looping={looping} /> */}
    </div>
  );
}

export default App;
