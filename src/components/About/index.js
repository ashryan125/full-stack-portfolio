import React from "react";
import { styled } from "@material-ui/core/styles";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import GroupIcon from "@material-ui/icons/Group";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BugReportIcon from "@material-ui/icons/BugReport";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";
import ashleyRyan from "../../assets/ashleyRyan.jpeg";
import SkillBar from "react-skillbars";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));

const useStyles = makeStyles(() => ({
  cardStyle: {
    boxShadow: "none",
    elevation: 0,
    textAlign: "center",
  },
  iconStyle: {
    fontSize: 60,
    marginBottom: "-15px",
  },
  aboutStyle: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontWeight: 900,
    textAlign: "center",
    padding: "50px 0px 5px 0px",
    marginBottom: "10px",
  },
  borderStyles: {
    borderBottom: "6px solid #15d803",
    width: "8%",
    margin: "0 auto 4% auto",
  },
  headshot: {
    width: "80%",
    borderRadius: "50%",
    margin: "0 auto",
    display: "block",
  },
  whoAmi: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "15px",
  },
  skillBar: {
    borderRadius: "0px",
    WebkitBorderRadius: "0px",
  },
  skillStyle: {
    margin: "auto auto",
  },
}));

export default function About() {


  const {
    cardStyle,
    iconStyle,
    aboutStyle,
    borderStyles,
    headshot,
    whoAmi,
    skillBar,
    skillStyle,
  } = useStyles();

  const responsiveCard = () => {
    return (
      <Card className={cardStyle} sx={{ maxWidth: 345 }}>
        <CardMedia>
          <ImportantDevicesIcon className={iconStyle} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Responsive
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I design Mobile First and make sure all layouts look great, no
            matter the device
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const collaborativeCard = () => {
    return (
      <Card className={cardStyle} sx={{ maxWidth: 345 }}>
        <CardMedia>
          <GroupIcon className={iconStyle} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Collaborative
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Team player and go getter. I work well with others and on teams, but
            can be set loose for independent projects
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const knowledgeCard = () => {
    return (
      <Card className={cardStyle} sx={{ maxWidth: 345 }}>
        <CardMedia>
          <EmojiObjectsIcon className={iconStyle} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Knowledge Seeking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I never want to stop learning or expanding my skills. If I'm not
            coding, I'm learning a new technology or recipe!
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const bugCard = () => {
    return (
      <Card className={cardStyle} sx={{ maxWidth: 345 }}>
        <CardMedia>
          <BugReportIcon className={iconStyle} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bug Smashing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            My code is bug free! Testing and clean code are my specialities
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const aboutCard = () => {
    return (
      <Card className={cardStyle}>
        <CardMedia>
          <img
            src={ashleyRyan}
            className={headshot}
            alt="ashley ryan headshot"
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" className={whoAmi}>
            Who am I?
          </Typography>
          <Typography variant="body2">
            I'm a Full Stack Developer located in Southern New Jersey. <br></br>{" "}
            I am seriously dedicated to perfecting my craft, learning new tools,
            and creating compelling, dynamic applications.
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const skills = [
    {
      type: "HTML",
      level: 90,
    },
    {
      type: "CSS",
      level: 85,
    },
    {
      type: "Javascript",
      level: 70,
    },
    {
      type: "Bootstrap",
      level: 85,
    },
    {
      type: "MySQL",
      level: 75,
    },
    {
      type: "MongoDB",
      level: 75,
    },
    {
      type: "Express",
      level: 75,
    },
    {
      type: "React",
      level: 60,
    },
    {
      type: "NodeJS",
      level: 75,
    },

    {
      type: "Photoshop",
      level: 95,
    },
  ];

  const colors = {
    bar: "#15d803",
    title: {
      text: "#fff",
      background: "#0ea800",
    },
  };

  return (
    <div className="aboutContainer" id="about" style={{ 'overflowX': 'hidden' }}>
      <Typography variant="h3" className={aboutStyle}>
        ABOUT
      </Typography>
      <div className={borderStyles}></div>

      <Grid container spacing={2} style={{ marginBottom: "5%" }} justifyContent='center'>
        <Grid item md={3}>
          <Item>{responsiveCard()}</Item>
        </Grid>

        <Grid item md={3}>
          <Item>{collaborativeCard()}</Item>
        </Grid>

        <Grid item md={3}>
          <Item> {knowledgeCard()}</Item>
        </Grid>

        <Grid item md={3}>
          <Item>{bugCard()}</Item>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={4}>
          <Item>{aboutCard}</Item>
        </Grid>

        <Grid item md={6} className={skillStyle} style={{ width: "100%" }}>
          <SkillBar skills={skills} colors={colors} className={skillBar} animationDelay={500}/>
        </Grid>
      </Grid>
    </div>
  );
}
