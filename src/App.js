
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';

import Header from './components/Header';
import VideoBackground from './components/VideoBackground';

import './styles/global.css';

function App() {
  return (
    <div className="container">
      <Header />
      <VideoBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
