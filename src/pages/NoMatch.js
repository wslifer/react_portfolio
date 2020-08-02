import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
  button: {
    marginLeft: "auto",
  },
});

export default function NoMatch() {
  const style = useStyles();

  return (
    <Grid>
      <AppBar className={style.nav} position="static">
        <Toolbar>
          <Typography variant="h5">Slifer Portfolio</Typography>
          <ButtonGroup
            className={style.button}
            size="large"
            aria-label="large outlined primary button group"
          >
            <Button>About</Button>
            <Button>Contact</Button>
            <Button>Portfolio</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Card className={style.card}>
        <CardContent>404! Page Not Found!</CardContent>
        <CardMedia className={style.cardPic} image="../assets/images/404.png" />
      </Card>
    </Grid>
  );
}
