import React, { useState } from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import photo from "../../assets/portfolio/small/commercial/0.jpg";

const useStyles = makeStyles(() => ({
  titleStyle: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontWeight: 900,
    textAlign: "center",
    padding: "50px 0px 5px 0px",
    margin: "20px 0 10px 0",
  },
  borderStyles: {
    borderBottom: "6px solid #15d803",
    width: "8%",
    margin: "0 auto 50px auto",
  },
}));

export default function Portfolio(props) {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [categories] = useState([
    {
      name: "Front-End",
      description:
        "Projects that feature front-end code: HTML, CSS, JavaScript",
    },
    { name: "Back-End", description: "Projects that feature front-end code: MySQL, Sequelize, MongoDB, NodeJS, Express" },
    { name: "React", description: "Projects using React" },
 
  ]);

  const { titleStyle, borderStyles } = useStyles();

  return (
    <div className="portfolioContainer" id="portfolio">
      <Typography variant="h3" className={titleStyle}>
        PROJECTS
      </Typography>
      <div className={borderStyles}></div>

      <Grid container>
        <Grid item md={4}>
          <h5>{currentCategory.name}</h5>
          <p>{currentCategory.name}</p>
          <div className="flex-row">
            <img
              src={photo}
              alt="Commercial Example"
              className="img-thumbnail mx-1"
            />
          </div>
        </Grid>

        <Grid item md={6} style={{ width: "100%" }}></Grid>
      </Grid>
    </div>
  );
}
