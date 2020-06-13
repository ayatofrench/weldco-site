import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import MUILink from '@material-ui/core/Link';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

}));

const Header = () => {

  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "weldco_logo_white.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 345, height: 66) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return(
    <AppBar position="static" color="primary">
      <div style={{backgroundColor:"white", height: 10}}></div>
      <div style={{display: "flex"}}>
        <div style={{flexGrow: 1}}>
          <div style={{height: 10}}></div>
          <div style={{backgroundColor:"#c2a031", height: 15}}></div>
          <div style={{height: 10}}></div>
        </div>
        <div style={{backgroundColor: "white", height: 35, padding: 5}}>
          <Typography style={{textAlign:"center", color: "black", fontSize: "1rem", lineHeight: "0.5", fontWeight:"bold"}}>CONTACT US FOR OUR SPECIAL DISCOUNTS</Typography>  
          <Typography style={{textAlign:"center", color: "#c2a031", fontSize: "0.75rem", lineHeight: 2, fontWeight:"bold"}}>FOR A LIMITED TIME ONLY</Typography> 
        </div>
        <div style={{flexGrow: 1}}>
          <div style={{height: 10}}></div>
          <div style={{backgroundColor:"#c2a031", height: 15}}></div>
          <div style={{height: 10}}></div>
        </div>
      </div>
      <div style={{backgroundColor:"white", height: 11}}></div>
      <Toolbar>
          <div style={{flexGrow: 1 }}>
            <Img fixed={data.file.childImageSharp.fixed} style={{margin: 14}}/>
          </div>
          <nav>
            <MUILink variant="button" color="textPrimary" className={classes.link}>Products<ArrowDropDownIcon style={{marginBottom: -8}} /></MUILink>
            <MUILink variant="button" color="textPrimary" className={classes.link}>Rental</MUILink>
            <MUILink variant="button" color="textPrimary" className={classes.link}>About</MUILink>
            <MUILink variant="button" color="textPrimary" className={classes.link}>Contact Us</MUILink>
          </nav>
      </Toolbar>
      <div style={{display: "flex", backgroundColor: "#b3b3b3", paddingLeft: 24, paddingRight: 24}}>
          <Grid className={classes.toolbarTitle}>
              <Grid item>
            <Typography variant="subtitle2" color="primary" className={classes.link}>
              Still... The Best Glass Rack Specialists
            </Typography>
            </Grid>
          </Grid>
          <nav>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2" color="primary" className={classes.link}>
                  weldco@glastrk.com
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="primary" className={classes.link}>
                  818-506-5490
                </Typography>
              </Grid>
            </Grid>
          </nav>
      </div>

    </AppBar>
    
  )
}

export default Header

