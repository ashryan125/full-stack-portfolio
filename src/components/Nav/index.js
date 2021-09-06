import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GetAppIcon from "@material-ui/icons/GetApp";
import resume from '../../assets/AshleyRyan-Resume.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "#0e0e12",
  },
  btnStyle: {
    backgroundColor: "#0ea600",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#15d803",
      color: "#fff",
    },
  },
  menuButton: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    "&:hover": {
      color: "#15d803",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  drawer: {
    backgroundColor: "#0e0e12",
    color: "#fff",
  },
  drawerItem: {
    "&:hover": {
      color: "#15d803",
    },
  },
  drawerBtn: {
    margin: "10px 0 10px 18px",
  },
  spacing: {
    marginLeft: "auto",
  },
  center: {
    marginLeft: "35%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "14%",
    },
  },
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
    label: "Projects",
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
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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
    };
  }, []);

  const {
    nav,
    menuButton,
    toolbar,
    drawer,
    drawerItem,
    btnStyle,
    spacing,
    center,
    drawerBtn,
  } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div className={center}>{getMenuButtons()}</div>
        <div className={spacing}>
          <Button
            alignSelf="flex-end"
            className={btnStyle}
            href={resume}
            download
          >
            <GetAppIcon />
            Resume
          </Button>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };

    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <List className={drawer}>
            {getDrawerChoices()}
            <Button className={`${btnStyle} ${drawerBtn}`} href={resume}
            download>
              <GetAppIcon />
              Resume
            </Button>
          </List>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return navData.map(({ label, href }) => {
      return (
        <ListItem className={drawerItem}>
          <Button
            {...{
              href: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            {label}
          </Button>
        </ListItem>
      );
    });
  };

  const getMenuButtons = () => {
    return navData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            href: href,
            className: menuButton,
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
