import React from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(() => ({
  modalBackdrop: {
    background: "rgba(0, 0, 0, .65)",
    bottom: 0,
    left: 0,
    overflow: "auto",
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  modalContainer: {
    background: "#111111",
    borderRadius: "5px",
    maxWidth: "100%",
    margin: "5% auto",
    padding: "15px",
    width: "70%",
  },
  modalTitle: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontSize: "2em",
    fontWeight: "800",
    marginBottom: "25px",
    color: "#fff",
  },
  descriptionStyle: {
    color: "#fff",
    fontFamily: "Noto Sans JP, sans-serif",
  },
  btnStyle: {
    backgroundColor: "#0ea600",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#15d803",
      color: "#fff",
    },
  },
  modalBtn: {
    backgroundColor: "#3b3b3b",
    color: "#d1d1d1",
    marginTop: "2%",
    "&:hover": {
      backgroundColor: "#575757",
    },
  },
  imgStyle: {
    width: "auto",
    height: '700px'
  },
}));

export default function Modal({ onClose, currentProject }) {
  const {
    modalBackdrop,
    modalContainer,
    modalTitle,
    descriptionStyle,
    btnStyle,
    modalBtn,
    imgStyle
  } = useStyles();

  const { name, category, description, index } = currentProject;

  return (
    <div className={modalBackdrop}>
      <Grid container className={modalContainer}>
        <Grid item md={12}>
          <h3 className={modalTitle}>{name}</h3>
        </Grid>
        <Grid item md={12} >
          <img alt="current project" src={require(`../../assets/portfolio/large/${category}/${index}.jpg`).default}
          className={imgStyle}/>
        </Grid>
        <Grid item md={12}>
          <p className={descriptionStyle}>{description}</p>
        </Grid>
        <Grid item style={{ marginRight: "8px" }}>
          <Button className={btnStyle} type="button" href="{github}">
            <GitHubIcon style={{ marginRight: "8px" }} /> Github
          </Button>
        </Grid>
        <Grid item md={1}>
          <Button className={btnStyle} type="button" href="{deployed}">
            <LanguageIcon style={{ marginRight: "8px" }} />
            Deployed
          </Button>
        </Grid>
        <Grid
          item
          md={12}
          style={{
            marginBottom: "5px",
          }}
        >
          <Button className={modalBtn} type="button" onClick={onClose}>
            <CancelIcon style={{ marginRight: "8px" }} />
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
