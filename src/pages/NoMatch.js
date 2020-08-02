import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  nav: {
    background: "#0276aa",
    marginBottom: 15,
    border: 0,
    borderRadius: 3,
    color: "black",
  },
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
    <Grid>
      <AppBar className={style.nav} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Slifer Portfolio</Typography>
        </Toolbar>
      </AppBar>
      <Card className={style.card}>
        <CardContent>404! Page Not Found!</CardContent>
        <CardMedia className={style.cardPic} image="../assets/images/404.png" />
      </Card>
    </Grid>
  );
}
