import React, { useState } from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  FormControl,
  TextField,
  withStyles,
} from "@material-ui/core";
import { validateEmail } from "../../utils/helpers";

const useStyles = makeStyles(() => ({
  backgroundStyle: {
    backgroundColor: "#0e0e12",
    paddingBottom: '5%'
  },
  titleStyle: {
    fontFamily: "Noto Sans JP, sans-serif",
    fontWeight: 900,
    textAlign: "center",
    padding: "5% 0px 5px 0px",
    margin: "0 0 10px 0",
    color: "#fff",
  },
  borderStyles: {
    borderBottom: "6px solid #15d803",
    width: "8%",
    margin: "0 auto 4% auto",
  },
  contactStyle: {
    marginBottom: "2%",
    color: "#fff",
    "& input": {
      color: "#fff",
    },
    "& label": {
      color: "#d1d1d1",
    },
    "& textArea": {
      color: "#fff",
    },
  },
  btnStyle: {
    backgroundColor: "#0ea600",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#15d803",
    },
  },
  formTitle: {
    color: "#bdbdbd",
    textAlign: "center",
    marginBottom: "3%",
  },
  errorText: {
      color: '#ff0000',
      fontSize: '1em'
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#15d803",
    },
    "& .MuiFilledInput-root": {
      "&:hover fieldset": {
        borderColor: "#15d803",
      },
      "&:after": {
        borderColor: "#15d803",
      },
    },
    color: "#fff",
    backgroundColor: "#1e242c",
  },
})(TextField);

export default function Contact() {
  const {
    titleStyle,
    borderStyles,
    backgroundStyle,
    contactStyle,
    btnStyle,
    formTitle,
    errorText,
  } = useStyles();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  const contactForm = () => {
    return (
      <form id="contact-form" onSubmit={handleSubmit} style={{'width': '90%', 'margin': '0 auto'}}>
        <Typography variant="h6" className={formTitle}>
          Looking to work together or have a question?
        </Typography>

        <FormControl fullWidth>
          <CssTextField
            label="Name"
            variant="filled"
            type="text"
            className={contactStyle}
            id="nameField"
            defaultValue={name}
            name="name"
            onBlur={handleChange}
            required
          />

          <CssTextField
            label="Email"
            autoComplete="none"
            variant="filled"
            className={contactStyle}
            id="emailField"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
            required
            type='email'
          />
          <CssTextField
            label="Message"
            multiline
            rows={5}
            autoComplete="none"
            variant="filled"
            className={contactStyle}
            id="messsageField"
            defaultValue={message}
            name="message"
            onBlur={handleChange}
            required
          />
          <Button
            className={btnStyle}
            type="submit"
            id="submitBtn"
          >
            Submit
          </Button>
          {errorMessage && (
          <div>
            <p className={errorText}>{errorMessage}</p>
          </div>
        )}
        </FormControl>
      </form>
    );
  };

  return (
    <div className={backgroundStyle} id="contact">
      <Typography variant="h3" className={titleStyle}>
        CONTACT
      </Typography>
      <div className={borderStyles}></div>

      <Grid container spacing={6} justifyContent="center" alignContent="center" >
        <Grid item md={5}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18058.437565264492!2d-75.33204303618422!3d39.64779682165853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1630709610999!5m2!1sen!2sus"
            width="100%"
            height="450px"
            style={{ '"border': "0" }}
            // allowfullScreen=""
            loading="lazy"
            title="google-map"
          ></iframe>
        </Grid>

        <Grid item md={5}>
          {contactForm()}
        </Grid>
      </Grid>
    </div>
  );
}
