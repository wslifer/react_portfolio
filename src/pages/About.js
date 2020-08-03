import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  picture: {
    height: 350,
    paddingTop: "56.25%",
  },
});

export default function About() {
  const style = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card item xs={6}>
          <CardMedia
            className={style.picture}
            image={require("../assets/images/profilepicture.png")}
            title="Profile Picture"
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <CardContent item xs={6}></CardContent>
      </Grid>
    </Grid>
  );
}
