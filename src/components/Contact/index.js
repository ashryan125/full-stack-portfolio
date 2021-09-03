import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import {GoogleApiWrapper} from 'google-maps-react';


const useStyles = makeStyles(() => ({
  backgroundStyle: {
    backgroundColor: "#0e0e12",
  },
  titleStyle: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontWeight: 900,
    textAlign: "center",
    padding: "5% 0px 5px 0px",
    margin: "0 0 10px 0",
    color: '#fff'
  },
  borderStyles: {
    borderBottom: "6px solid #15d803",
    width: "8%",
    margin: "0 auto 4% auto",
  },
}));

export default function Contact() {
  const { titleStyle, borderStyles, backgroundStyle } = useStyles();

  const contactForm = () => {
    return (
      <FormControl>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          defaultValue="Your Name"
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField label="Email" fullWidth autocomplete="none"  variant="filled"
          defaultValue="Your Email"/>
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={5}
          autocomplete="none"
          variant="filled"
          defaultValue="Your Message"
        />
        <Button type="submit">Submit</Button>
      </FormControl>
    );
  };

  return (
    <div className={backgroundStyle} id="contact">
      <Typography variant="h3" className={titleStyle}>
        CONTACT
      </Typography>
      <div className={borderStyles}></div>

      <Grid container spacing={2}>

      <Grid item md={6} style={{ width: "100%" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18058.437565264492!2d-75.33204303618422!3d39.64779682165853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1630709610999!5m2!1sen!2sus" width="600" height="450" style={{'"border':'0'}} allowfullscreen="" loading="lazy"></iframe>
        </Grid>

        <Grid item md={4}>
        {contactForm()}
        </Grid>

    </Grid>
    </div>
  );
}
