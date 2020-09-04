import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  paper: {
    textAlign: "center",
    "& .MuiPaper-rounded": {
      borderRadius: 0,
    },
  },
});

export default function Portfolio() {
  const style = useStyles();

  return (
    <Section style={{ background: "#f5f5f5" }}>
      <Title>
        <Typography>Projects</Typography>
      </Title>

      <div className={classes.grid}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                tools=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <Card
                image={}
                title=""
                alt=""
                text=""
                github=""
                heroku=""
                locked={false}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Section>
  );
}
