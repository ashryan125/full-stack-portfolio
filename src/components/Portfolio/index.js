import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    titleStyle: {
      fontFamily: "Noto Sans JP, sans-serif",
      fontWeight: 900,
      textAlign: "center",
      padding: "50px 0px 5px 0px",
      marginBottom: "10px",
    },
    borderStyles: {
      borderBottom: "6px solid #15d803",
      width: "8%",
      margin: "0 auto 50px auto",
    }

  }));

export default function Portfolio() {

  const {
    titleStyle,
    borderStyles,
  } = useStyles();

  return (
    <div className="portfolioContainer" id="portfolio">
      <Typography variant="h3" className={titleStyle}>
        PORTFOLIO
      </Typography>
      <div className={borderStyles}></div>


      <Grid container>
        <Grid item md={4}>
          <Item>{aboutCard}</Item>
        </Grid>

        <Grid item md={6} className={skillStyle} style={{ width: "100%" }}>
          <SkillBar skills={skills} colors={colors} className={skillBar} />
        </Grid>
      </Grid>
    </div>
  );
}
