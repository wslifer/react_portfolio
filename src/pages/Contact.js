import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import { AutoComplete } from "material-ui";

const useStyles = makeStyles({
  contact: {
    color: "white",
    fontSize: 28,
    background: "#615e57",
    borderRadius: 3,
    height: 450,
    width: 750,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    background: "#0276aa",
    color: "white",
    width: 300,
    height: 75,
    display: "flex",
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

export default function Contact() {
  const style = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Card item xs className={style.contact}>
          <CardContent>
            <Button className={style.button} href="https://github.com/wslifer">
              Github
            </Button>
            <Button
              className={style.button}
              href="https://www.linkedin.com/in/wesley-slifer"
            >
              LinkedIn
            </Button>
            <Button
              className={style.button}
              href="https://docs.google.com/document/d/1xJyHqfyaGYW9o0bk_da3j560ggTP2LP6BtKD9JMovJM/edit?usp=sharing"
            >
              Resume
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
