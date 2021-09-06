import React from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import linkedin from "../../assets/linkedin.png";

const useStyles = makeStyles(() => ({
  backgroundStyle: {
    backgroundColor: "#1e242c",
    padding: "1%",
  },
  iconStyle: {
    color: "#575757",
    fontSize: "50px",
    height: "60px",
    margin: '0 5px 0 5px'
  },
}));

export default function Contact() {
  const { backgroundStyle, iconStyle } = useStyles();

  return (
    <div className={backgroundStyle} id="resume">
      <Grid container justifyContent="center">
        <Grid item>
          <IconButton href='https://github.com/ashryan125' target='blank'><GitHubIcon className={iconStyle}/></IconButton>
        </Grid>
        <Grid item>
          <IconButton href='https://www.linkedin.com/in/ashleyryan125/' target='blank'><img src={linkedin} className={iconStyle}/></IconButton>
        </Grid>
        <Grid item>
          <IconButton href='https://twitter.com/ashryan125' target='blank'><TwitterIcon className={iconStyle}/></IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
