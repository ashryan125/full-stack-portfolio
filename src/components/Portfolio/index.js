import React, { useState } from "react";
import ProjectList from "../ProjectList";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import { capitalizeFirstLetter } from "../../utils/helpers";

const useStyles = makeStyles(() => ({
  backgroundStyle: {
    backgroundColor: "#f5f5f5",
  },
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
    margin: "0 auto 4% auto",
  },
  btn: {
    fontSize: "1.45em",
    marginBottom: "15px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#15d803",
    },
  },
  mobileBtn: {
    width: '100%',
    textAlign: 'center'
  },
  descriptionStyle: {
    fontFamily: "Noto Sans JP, sans-serif",
    textAlign: 'center',
    margin: '-20px 0 10px 0'
  }
}));

export default function Portfolio() {
  const [categories] = useState([
    {
      name: "all",
      description: "Project below feature: HTML, CSS, JavaScript, MongoDB, Sequelize, Express, NodeJS, React",
    },
    {
      name: "front-end",
      description:
        "Projects that feature front-end code: HTML, CSS, JavaScript",
    },
    {
      name: "back-end",
      description:
        "Projects that feature front-end code: MySQL, Sequelize, MongoDB, NodeJS, Express",
    },
    // { name: "react", description: "Projects using React" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const { titleStyle, borderStyles, btn, backgroundStyle, descriptionStyle } = useStyles();

  const projectNav = () => {
    return (
      <Grid
        container
        justifyContent="center"
        spacing={2}
      >
        {categories.map((category) => (
          <Grid
            item
            className={` ${currentCategory.name === category.name}`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              <Button className={btn}>
                {capitalizeFirstLetter(category.name)}
              </Button>
            </span>
          </Grid>
        ))}
            <Grid item md={12} className={descriptionStyle}>{currentCategory.description} </Grid>
      </Grid>
    );
  };

  return (
    <div
      className={backgroundStyle}
      id="portfolio"
      style={{ "overflowX": "hidden" }}
    >
      <Typography variant="h3" className={titleStyle}>
        PROJECTS
      </Typography>
      <div className={borderStyles}></div>

      {projectNav()}

      <ProjectList category={currentCategory.name} />
    
    </div>
  );
}
