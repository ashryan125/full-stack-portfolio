import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import background from "../../assets/background.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  btn: {
    border: "1px solid #fff",
    borderRadius: 0,
    color: "white",
    '&:hover': {
        backgroundColor: '#fff',
        color: '#000'
    }
  },

});



function Landing() {
  const classes = useStyles();

  return (
    <header className="height-fix">
      <div className="canvas flex">
        <div className="flex height">
        <p className="text">
          Hey there, I'm
          <span className="highlight"> Ashley Ryan</span>. <br></br>
          I'm a full-stack web developer
        </p>
        <Button
          endIcon={<ArrowForwardIcon />}
          href="#portfolio"
          variant="outlined"
          size="large"
          className={classes.btn}
        >
          See my work!
        </Button>
      </div></div>
     
    </header>
  );
}

export default Landing;
