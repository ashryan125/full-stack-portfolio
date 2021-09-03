import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
      },
    imgThumbnail: {
        width: 'auto',
        height: '300px',
    }
}));

export default function ProjectList({ category }) {
  const [projects] = useState([
    {
      name: "project-1",
      category: "front-end",
      description: "",
    },
    {
      name: "project-2",
      category: "front-end",
      description: "",
    },
    {
      name: "project-3",
      category: "front-end",
      description: "",
    },
    {
      name: "project-4",
      category: "front-end",
      description: "",
    },
  ]);

  const { imgThumbnail } = useStyles();

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <Grid
      container
      style={{
        margin: "0 auto",
        width: "85%",
      }}
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
      {projects.map((image, i) => (
        <Grid item>
          <img
            src={
              require(`../../assets/portfolio/small/${category}/${i}.jpg`)
                .default
            }
            alt={image.name}
            key={image.name}
            className={imgThumbnail}
          />
        </Grid>
      ))}
    </Grid>
  );
}
