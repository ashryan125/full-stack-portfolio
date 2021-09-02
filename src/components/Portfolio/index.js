import React, { useState } from "react";
import ProjectList from '../ProjectList';
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";


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
  btn: {
      fontSize: '1.25em',
      marginBottom: '15px',
    "&:hover": {
        color: "#fff",
        backgroundColor: '#15d803'
      },
  },
 
}));



export default function Portfolio() {

  const [categories] = useState([
    {
      name: "All",
      description: "all projects",
    },
    {
      name: "Front-End",
      description:
        "Projects that feature front-end code: HTML, CSS, JavaScript",
    },
    {
      name: "Back-End",
      description:
        "Projects that feature front-end code: MySQL, Sequelize, MongoDB, NodeJS, Express",
    },
    { name: "React", description: "Projects using React" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const { titleStyle, borderStyles, btn } = useStyles();

  const projectNav = () => {
    return (
        
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category) => (
          <Grid item
            className={` ${
              currentCategory.name === category.name
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
             <Button className={btn}>{category.name}</Button> 
            </span>
          </Grid>
        ))}
      </Grid>
  
    );
  };

  return (
    <div className="portfolioContainer" id="portfolio">
      <Typography variant="h3" className={titleStyle}>
        PROJECTS
      </Typography>
      <div className={borderStyles}></div>

        {projectNav()}

      <Grid container>
    
        <Grid item md={4}>
          <ProjectList category={currentCategory.name} />
        </Grid>

      </Grid>
    </div>
  );
}
