import React from "react";
import {
    Typography,
    Grid,
    makeStyles,
    Button,
    FormControl,
    TextField,
    withStyles,
  } from "@material-ui/core";
  import TwitterIcon from "@material-ui/icons/Twitter";
  import GetAppIcon from '@material-ui/icons/GetApp';
  import GitHubIcon from "@material-ui/icons/GitHub";

  const useStyles = makeStyles(() => ({
    backgroundStyle: {
      backgroundColor: "#1e242c",
      padding: '1%',
    },
    headingStyles: {
        color: '#fff',
        margin: '2% auto'
    },
    btnStyle: {
        backgroundColor: "#0ea600",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#15d803",
          color: "#fff",
        },
      },
  }));


export default function Contact() {

    const {
        backgroundStyle,
        headingStyles,
        btnStyle
      } = useStyles();

    return (
        <div className={backgroundStyle} id="resume">
            <Grid container>
                <Grid item>
                    <Button className={btnStyle}><GetAppIcon/>Resume</Button>
                </Grid>
                <Grid item>
                <GitHubIcon/>
                </Grid>
                <Grid item>
                    LinkedIn
                </Grid>
                <Grid item>
                    <TwitterIcon/>
                </Grid>
            </Grid>
            <h2 className={headingStyles}>Footer!</h2></div>
    );
}