import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Modal from "../Modal";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  imgThumbnail: {
    width: "auto",
    height: "300px",
  },
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

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      <Grid
        container
        style={{
          margin: "0 auto 5% auto",
          width: "85%",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {currentProjects.map((image, i) => (
          <Grid item>
            <img
              src={
                require(`../../assets/portfolio/small/${category}/${i}.jpg`)
                  .default
              }
              alt={image.name}
              onClick={() => toggleModal(image, i)}
              key={image.name}
              className={imgThumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
