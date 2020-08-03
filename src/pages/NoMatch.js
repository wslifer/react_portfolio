import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    height: 750,
    width: 1200,
    background: "#1e211f",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 32,
    textAlign: "center",
    color: "white",
  },
  cardPic: {
    margin: "auto",
    height: 450,
    width: 450,
  },
});

export default function NoMatch() {
  const style = useStyles();

  return (
    <Grid item xs>
      <Card className={style.card}>
        <CardContent>404! Page Not Found!</CardContent>
        <CardMedia className={style.cardPic} image="../assets/images/404.png" />
      </Card>
    </Grid>
  );
}
