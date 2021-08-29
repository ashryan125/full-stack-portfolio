import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton } from '@material-ui/core';
import { auto } from 'async';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
    nav: {
        backgroundColor: '#0e0e12',
    },
    // logo: {
    //     fontFamily: "Noto Sans JP, sans-serif",
    //     fontWeight: 700,
    //     color: "#FFFEFE",
    //   },
      menuButton: {
        fontFamily: "Noto Sans JP, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        '&:hover': {
            color: '#15d803'
        }
      },
      toolbar: {
          display: 'flex',
          justifyContent: 'center'
      }
    
}));

const navData = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

export default function Nav() {

    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { mobileView } = state;
    
      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 600
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
      }, []);


    const { nav,  menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>
            {/* {ashleyLogo} */}
           <div>{getMenuButtons()}</div>
            </Toolbar>;
    };

    const displayMobile = () => {
        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
              }}
            >
              <MenuIcon />
            </IconButton>
    <div></div>
    </Toolbar>
        );
      };

    // const ashleyLogo = (
    //     <Typography variant='h6' component='h1' className={logo}>
    //         <BlurOn fontSize='large' style={{ color: '#15d803' }}/> Ashley Ryan
    //     </Typography>
    // );

    const getMenuButtons = () => {
        return navData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                className: menuButton
                
              }}
            >
              {label}
            </Button>
          );
        });
      };



    return (
        <nav>
            <AppBar className={nav}>
            {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </nav>
    );
}


//   return (
//     <nav className="flex nav">
//       <ul className="mainNav">
//         <li className="links">
//           <a href="#home">Home</a>
//         </li>
//         <li className="links">
//           <a href="#about">About</a>
//         </li>
//         <li className="links">
//           <a href="#portfolio">Portfolio</a>
//         </li>
//         <li className="links">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

