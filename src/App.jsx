import { Routes, Route } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import { UserProvider } from "./context/UserContext";
import { useTheme } from "./context/ThemeContext";

import './App.css';
import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import About from "./pages/About";
import WeatherPage from "./pages/WeatherPage";
import CurrencyPage from "./pages/CurrencyPage";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <UserProvider>
          <PostsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/currency" element={<CurrencyPage />} />
            </Routes>
          </PostsProvider>
        </UserProvider>
      </main>
    </div>
  )
}

export default App
