import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import Card from "../components/Card";
import { makeStyles } from "@material-ui/core/styles";
import quarantinis from "../assets/images/Quarantinis.PNG";

const useStyles = makeStyles({
  paper: {
    textAlign: "center",
    "& .MuiPaper-rounded": {
      borderRadius: 0,
    },
  },
});

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Grid style={{ background: "#f5f5f5" }}>
      <Typography variant="h1">Projects</Typography>

      <div className={classes.grid}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
