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

export default function NoMatch() {
  return (
    <Grid>
      <AppBar position="static" bgcolor="info.main">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Slifer Portfolio</Typography>
        </Toolbar>
      </AppBar>
      <Card>
        <CardMedia></CardMedia>
        <CardContent>404! Page Not Found!</CardContent>
      </Card>
    </Grid>
  );
}
