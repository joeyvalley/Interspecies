import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'

import './styles/global.css';

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes> */}
    </div>
  );
}

export default App;
