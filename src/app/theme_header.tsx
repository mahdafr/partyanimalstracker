"use client";

import React, { useEffect, useState, useCallback, useContext } from "react";
import { ThemeButton } from "./button_theme";


// function Header() {
//     const [isDarkMode, setIsDarkMode] = useMyThemeContext();

//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <AppBar
//                 position="static"
//                 color="default"
//                 elevation={0}
//                 className={classes.appBar}
//             >
//                 <Toolbar className={classes.toolbar}>
//                     <Switch
//                         checked={isDarkMode}
//                         onChange={() => setIsDarkMode(!isDarkMode)}
//                     />
//                 </Toolbar>
//             </AppBar>
//         </React.Fragment>
//     );
// }

const Header2: React.FC = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const toggleNavbar = useCallback(() => {
        setMenuActive((prevMenuActive) => !prevMenuActive);
    }, []);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        if (typeof window !== "undefined") {
          setWindowWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }
    }, []);
    
    useEffect(() => {
        if (windowWidth > 1200) {
          setMenuActive(false);
        }
    }, [windowWidth]);
  
    return (
      <React.Fragment>
        {/* <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Switch
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
          </Toolbar>
        </AppBar> */}
      </React.Fragment>
    );
  }

// export default Header;