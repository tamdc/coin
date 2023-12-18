import React, { useState } from "react";
import "./App.css";
import Main from "./components/main";
import Menu from "./components/menu";
import { DARK, LIGHT } from "./constants/theme";

export const ThemeProvider = React.createContext();

const themes = {
  [LIGHT]: { background: "#fff", color: "#000" },
  [DARK]: { background: "#171717", color: "#fff" },
};

function App() {
  const [theme, setTheme] = useState(DARK);
  const toggleTheme = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme);
  };
  return (
    <ThemeProvider.Provider value={{ toggleTheme }}>
      <div
        className="container min-h-screen "
        style={{
          backgroundColor: themes[theme].background,
          color: themes[theme].color,
        }}
      >
        <Menu />
        <Main />
      </div>
    </ThemeProvider.Provider>
  );
}

export default App;
