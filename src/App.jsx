import { Routes, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import About from "./pages/About";

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
