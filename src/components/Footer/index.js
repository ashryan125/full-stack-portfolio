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

  const useStyles = makeStyles(() => ({
    backgroundStyle: {
      backgroundColor: "#1e242c",
      padding: '1%',
    },
    headingStyles: {
        color: '#fff',
        margin: '2% auto'
    }
  }));


export default function Contact() {

    const {
        backgroundStyle,
        headingStyles
      } = useStyles();

    return (
        <div className={backgroundStyle} id="resume">
            <h2 className={headingStyles}>Footer!</h2></div>
    );
}