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
import { black } from "material-ui/styles/colors";

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
    width: 950,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 32,
    textAlign: "center",
    background: "black",
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
        <CardMedia></CardMedia>
        <CardContent>404! Page Not Found!</CardContent>
      </Card>
    </Grid>
  );
}
