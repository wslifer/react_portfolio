import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  project: {
    background: "#615e57",
    borderRadius: 3,
    height: 200,
    marginBottom: 20,
    display: "flex",
  },
  projectPic: {
    height: 150,
    width: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    color: "white",
    background: "#0276aa",
    height: 75,
    margin: "auto",
  },
});

export default function Portfolio() {
  const style = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card className={style.project}>
          <Button
            className={style.button}
            href="https://wslifer.github.io/Project_1/"
          >
            Bites and Quarantinis
          </Button>
          <CardMedia
            image={require("../assets/images/Project1.PNG")}
            className={style.projectPic}
          />
        </Card>
        <Card className={style.project}>
          <Button
            className={style.button}
            href="https://wslifer.github.io/Project_1/"
          >
            Bites and Quarantinis
          </Button>
          <CardMedia
            image={require("../assets/images/Project1.PNG")}
            className={style.projectPic}
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={style.project}>
          {" "}
          <Button
            className={style.button}
            href="https://wslifer.github.io/Project_1/"
          >
            Bites and Quarantinis
          </Button>
          <CardMedia
            image={require("../assets/images/Project1.PNG")}
            className={style.projectPic}
          />
        </Card>
        <Card className={style.project}>
          {" "}
          <Button
            className={style.button}
            href="https://wslifer.github.io/Project_1/"
          >
            Bites and Quarantinis
          </Button>
          <CardMedia
            image={require("../assets/images/Project1.PNG")}
            className={style.projectPic}
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={style.project}>
          {" "}
          <Button
            className={style.button}
            href="https://wslifer.github.io/Project_1/"
          >
            Bites and Quarantinis
          </Button>
          <CardMedia
            image={require("../assets/images/Project1.PNG")}
            className={style.projectPic}
          />
        </Card>
        <Card className={style.project}>
          {" "}
          <Button
            className={style.button}
            href="https://wslifer.github.io/Project_1/"
          >
            Bites and Quarantinis
          </Button>
          <CardMedia
            image={require("../assets/images/Project1.PNG")}
            className={style.projectPic}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
