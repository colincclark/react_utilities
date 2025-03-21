import { useTheme } from "./providers/ThemeProvider";

import "./NavBar.css";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navigation">
      <div className="header-account-link" onClick={toggleTheme}>
        {theme === "dark" ? (
          <span className="material-icons" title="Switch to Light Mode">
            light_mode
          </span>
        ) : (
          <span className="material-icons" title="Switch to Dark Mode">
            dark_mode
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
