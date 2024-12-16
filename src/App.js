
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Support from './pages/Support';
import Contact from './pages/Contact';

import Contributors from './pages/About/Contributors';
import History from './pages/About/History';
import Theory from './pages/About/Theory';

import Essays from './pages/Library/Essays';
import Interviews from './pages/Library/Interviews';
import Newsletter from './pages/Library/Newsletter';
import Recordings from './pages/Library/Recordings';
import Video from './pages/Library/Video';

import Art from './pages/Programs/Art';
import Field from './pages/Programs/Field';
import Research from './pages/Programs/Research';


import Header from './components/Header';
import VideoBackground from './components/VideoBackground';

import './styles/global.css';

function App() {

  const [looping, setLooping] = useState(true);

  const toggleVideo = (value) => {
    setLooping(value);
  };

  return (
    <div className="container">
      <Header setLooping={toggleVideo} />
      <VideoBackground looping={looping} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/history" element={<History />} />
        <Route path="/communication-theory" element={<Theory />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/video" element={<Video />} />
        <Route path="/art-projects" element={<Art />} />
        <Route path="/field-work" element={<Field />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </div>
  );
}

export default App;
