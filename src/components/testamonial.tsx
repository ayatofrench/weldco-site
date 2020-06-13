import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Img from 'gatsby-image/withIEPolyfill';

import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography"
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import Link from "../components/link"

const Testamonial = () => {

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
			<Grid container style={{flexGrow: 1}}>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4} style={{backgroundColor:"#b3b3b3"}}>
							<Typography style={{textAlign: "center", color:"black"}}>"We've been using Weldco racks for about 20 years. "</Typography>
							<Typography style={{textAlign: "center", color:"black"}}>"The engineering is really good. We've been using Weldco racks for about 20 years. They are built strong and look nice."</Typography>
							<Typography style={{textAlign: "center", color:"black"}}>- Victor  Gonzalez  of Academy Glass in Las Vegas, NV</Typography>
						</Grid>
						<Grid item xs={8}>
							<Typography>Picture</Typography>
						</Grid>
					</Grid>
					</Grid>
    	</Grid>
		</React.Fragment>
	)
}

export default Testamonial