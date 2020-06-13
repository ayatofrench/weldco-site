import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Testamonial from "../components/testamonial"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography"
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      width: 400,
    }
  }),
);


const IndexPage = () => {
  const classes = useStyles();
  
  
  return (
  <Layout>
    <SEO title="Home" />
    <section style={{}}>
      <Hero />
    </section>
    <section style={{height: 615}}>
      <div style={{backgroundColor:"#c2a031", height:"inherit", position:"relative"}}> 
        <Image /> 
        <div style={{	borderBottom: "378px solid white",
          borderLeft: "242px solid transparent",
          borderRight: "635px solid transparent",
          height: 0,
          width: 1138,
          position:"absolute",
          transform: "rotate(-30.8deg)",
          left: -195,
          bottom: 286}}></div>
          <Typography style={{position: "absolute", top: 40, left: "13.75rem", fontSize: "1.375rem", fontWeight:"bold"}}>Since 1946, Weldco has been serving  the glass and</Typography>
          <Typography style={{position: "absolute", top: 110, left: 140, fontSize: "1.375rem", fontWeight:"bold"}}>glazing industry with nothing but the best glass racks</Typography>
          <Typography style={{position: "absolute", top: 184, left: 85, fontSize: "1.375rem", fontWeight:"bold"}}>A Weldco rack is a rack hand-crafted to last</Typography>   
          <Typography style={{position: "absolute", top: 210, fontSize: 64, fontWeight:"bold"}}>A LIFETIME</Typography>
          <Typography style={{position: "absolute", top: 405, fontSize: 64, fontWeight:"bold", transform: "rotate(-30.8deg)"}}>SINCE 1946</Typography>
        <div style={{width: "53rem",
              height: "35rem",
            clipPath: "polygon(-6% 100%, 100% 100%, 100% 4%)",
          bottom:0,
          position:"absolute",
          backgroundColor: "black"}}></div>
          <Typography style={{color: "#c2a031", position: "absolute", top: 446, left: 24, fontSize: 64, fontWeight:"bold", transform: "rotate(-30.8deg) scale(1, -1)", filter: "blur(3px)"}}>SINCE 1946</Typography>
          <Typography style={{color: "#c2a031", position: "absolute", top: 446, left: 335, fontSize: 70, fontWeight:"bold", textAlign:"end", lineHeight:"1"}}>WHY <br/> WELDCO?</Typography>
      </div>
    </section>
    <section>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          {/* {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))} */}
          <Grid item className={classes.paper}>
              <Typography style={{textAlign:"center", color:"black"}}>Customizable</Typography>
              <Typography style={{color:"black"}}>
              Our racks come with a variety of options available for your needs, such as ladder hangers, extensions, and toolboxes.
              Additionally, we can make non-standard racks for those with specialized needs, like stake bed A-frame hybrid racks and half-rack, half-toolbox units.. We know that not every glass company is like another, and so we aim to make your work truck work for you.
              </Typography>
          </Grid>
          <Grid item className={classes.paper}>
              <Typography style={{textAlign:"center", color:"black"}}>Durable</Typography>
              <Typography style={{color:"black"}}>
              Our racks come with a variety of options available for your needs, such as ladder hangers, extensions, and toolboxes.
              Additionally, we can make non-standard racks for those with specialized needs, like stake bed A-frame hybrid racks and half-rack, half-toolbox units.. We know that not every glass company is like another, and so we aim to make your work truck work for you.
              </Typography>
          </Grid>
          <Grid item className={classes.paper}>
              <Typography style={{textAlign:"center", color:"black"}}>Reliable Quality</Typography>
              <Typography style={{color:"black"}}>
              Our racks come with a variety of options available for your needs, such as ladder hangers, extensions, and toolboxes.
              Additionally, we can make non-standard racks for those with specialized needs, like stake bed A-frame hybrid racks and half-rack, half-toolbox units.. We know that not every glass company is like another, and so we aim to make your work truck work for you.
              </Typography>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </section>
    <section>
      <Typography style={{color:"black"}}>Testamonials</Typography>
      <Testamonial />
    </section>
    <section>
      <Typography style={{color:"black"}}>WELDCO SPECIALTIES</Typography>
    </section>
    <section>
      <Typography style={{color:"black"}}>Begin your journey with the most important purchase you can make for your vehicle</Typography>
      <Button>REQUEST A QUOTE</Button>
    </section>
  </Layout>
)}

export default IndexPage
