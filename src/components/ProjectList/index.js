import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Modal from "../Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imgThumbnail: {
    width: "auto",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: '175px'
    },
  },
}));

export default function ProjectList({ category }) {
  const [projects] = useState([
    {
      name: "Beat-IT Music App",
      category: "back-end",
      description: "This webpage, BEAT IT is based on songs. The website provides a user to post music by searching their favorite song which is connected through Spotify API, write a review about the song, as well as give the song a rating of their choice from 1-5. The user can go to other user's posts and add their comment on the post and also vote thier input of like or dislike.",
      github: 'https://github.com/ashryan125/musicesq',
      deployed: 'https://beatit-music-app.herokuapp.com/'
    },
    {
      name: "Offbeat News - Tech News App",
      category: "back-end",
      description: "A tech news blog where you can post links, leave a review, add comments and downvote/upvote other's posts!",
      github: 'https://github.com/ashryan125/offbeat-news',
      deployed: 'https://offbeat-news.herokuapp.com/'
    },
    {
      name: "Date Night Done Right",
      category: "front-end",
      description: "Date Night Done Right is an app we created that answers the age old question of 'what do we eat tonight' ",
      github: 'https://github.com/ashryan125/DateNightDoneRight',
      deployed: 'https://reubengenkin.github.io/Enterthevoid/'
    },
    {
      name: 'Spacebook',
      category: "back-end",
      description: "A social media startup where users can share their thoughts, react to friends' thoughts, and create a friend list. Back-end is complete and ready for a front-end application to be built",
      github: 'https://github.com/ashryan125/spacebook',
      deployed: 'https://drive.google.com/file/d/163hjHpMLv2AbtO6SV7zNVcFHvLphM--A/view'
    },
    {
      name: "Just Tech News",
      category: "back-end",
      description: "A demo news site (like Reddit) where users can post links to articles and other users can then vote (up or down) and make comments",
      github: 'https://github.com/ashryan125/ecommerce-backend',
      deployed: 'https://powerful-beach-05665.herokuapp.com/'
    },
    {
      name: "Code Quiz",
      category: "front-end",
      description: "An online quiz that generates content dynamically and stores scores in localStorage",
      github: 'https://github.com/ashryan125/code-quiz',
      deployed: 'https://ashryan125.github.io/code-quiz/'
    },
    {
      name: "Beat-IT Music App",
      category: "all",
      description: "This webpage, BEAT IT is based on songs. The website provides a user to post music by searching their favorite song which is connected through Spotify API, write a review about the song, as well as give the song a rating of their choice from 1-5. The user can go to other user's posts and add their comment on the post and also vote thier input of like or dislike.",
      github: 'https://github.com/ashryan125/musicesq',
      deployed: 'https://beatit-music-app.herokuapp.com/'
    },
    {
      name: "Offbeat News - Tech News App",
      category: "all",
      description: "A tech news blog where you can post links, leave a review, add comments and downvote/upvote other's posts!",
      github: 'https://github.com/ashryan125/offbeat-news',
      deployed: 'https://offbeat-news.herokuapp.com/'
    },
    {
      name: "Date Night Done Right",
      category: "all",
      description: "Date Night Done Right is an app we created that answers the age old question of 'what do we eat tonight' ",
      github: 'https://github.com/ashryan125/DateNightDoneRight',
      deployed: 'https://reubengenkin.github.io/Enterthevoid/'
    },
    {
      name: 'Spacebook',
      category: "all",
      description: "A social media startup where users can share their thoughts, react to friends' thoughts, and create a friend list. Back-end is complete and ready for a front-end application to be built",
      github: 'https://github.com/ashryan125/spacebook',
      deployed: 'https://drive.google.com/file/d/163hjHpMLv2AbtO6SV7zNVcFHvLphM--A/view'
    },
    {
      name: "Just Tech News",
      category: "all",
      description: "A demo news site (like Reddit) where users can post links to articles and other users can then vote (up or down) and make comments",
      github: 'https://github.com/ashryan125/ecommerce-backend',
      deployed: 'https://powerful-beach-05665.herokuapp.com/'
    },
    {
      name: "Code Quiz",
      category: "all",
      description: "An online quiz that generates content dynamically and stores scores in localStorage",
      github: 'https://github.com/ashryan125/code-quiz',
      deployed: 'https://ashryan125.github.io/code-quiz/'
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
                require(`../../assets/portfolio/${category}/${i}.png`)
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
