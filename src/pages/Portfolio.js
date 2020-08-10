import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  project: {
    color: "white",
    fontSize: 28,
    background: "#615e57",
    borderRadius: 3,
    height: 200,
    marginBottom: 20,
  },
});

export default function Portfolio() {
  const style = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card className={style.project}></Card>
        <Card className={style.project}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={style.project}></Card>
        <Card className={style.project}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={style.project}></Card>
        <Card className={style.project}></Card>
      </Grid>
    </Grid>
  );
}
