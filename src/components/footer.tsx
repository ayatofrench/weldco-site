import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MUILink from '@material-ui/core/Link';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

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

const Footer = () => {

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
		<footer style={{backgroundColor:"black"}}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid container>
						<Grid item >
							<Img fixed={data.file.childImageSharp.fixed} style={{margin: 14}}/>
							<Typography style={{color:"white", textAlign:"center"}}>10124 Romandel Avenue</Typography>
							<Typography style={{color:"white", textAlign:"center"}}>Santa Fe Springs, CA 90670</Typography>
							<Typography style={{color:"white", textAlign:"center"}}>Email: Weldco@glastrk.com</Typography>
							<Typography style={{color:"white", textAlign:"center"}}>Phone: 818-506-5490</Typography>
						</Grid>
						<Grid item>
							<Link to="/">Products</Link>
							<Link to="/">Products</Link>
							<Link to="/">Products</Link>
							<Link to="/">Products</Link>
							<Link to="/">Products</Link>
						</Grid>
					</Grid>
					<Typography style={{color:"white", textAlign:"center"}}>© Weldco {new Date().getFullYear()}</Typography>
				</Grid>
			</Grid>
		</footer>
  )
}

export default Footer