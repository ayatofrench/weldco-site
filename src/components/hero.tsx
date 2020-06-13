import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Img from 'gatsby-image/withIEPolyfill';

import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography"

import Link from "../components/link"

const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "red_glass_rack_truck_chassis.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	return (
		<React.Fragment>
			<div style={{backgroundColor: "#c2a031", padding: 5}}></div>
			<Img fluid={data.placeholderImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: 615}} />
			<div style={{position: "relative"}}>
				<div style={{position: "absolute",
					bottom: 250,
					left: 0,
					right: 0,
					textAlign: "center",
					margin: "0 auto"}}>
					<Link to="/products">VIEW PRODUCTS</Link> 
					<Button style={{width: "16.25rem", height: "3.75rem",fontSize:"1.25rem", backgroundColor:"rgba(0,0,0,0.5)", zIndex: 1}}>REQUEST A QUOTE</Button>
				</div>
				<Typography style={{
					width: "80%",
					textAlign: "center",
					margin: "0px auto",
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-end" }} variant="h2" color="textPrimary">WE ARE OPEN FOR BUSINESS</Typography>
				</div>
			</React.Fragment>
	)
}

export default Hero