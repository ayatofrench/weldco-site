import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Typography from "@material-ui/core/Typography"

const Discounts: React.FC<PageProps> = ({data, path}) => (
    <Layout>
			<div style={{backgroundColor: "#c2a031", padding: 5}}></div>
			<div>
				<Typography style={{textAlign:"center", fontWeight:"bold", fontSize:60}}>SPECIAL DISCOUNTS</Typography>
			</div>
			<section>
				<div style={{backgroundColor:"#b3b3b3"}}>
					<Typography style={{textAlign:"center"}}>* for a limited time only</Typography>
					<div>
						<div style={{height: 295, width: 288, backgroundColor:"white"}}>
						<div style={{backgroundColor: "#c2a031", padding: 9}}></div>
						<Typography style={{textAlign:"center", fontSize:30, fontWeight:"bold", padding:10}}>Complimentary Out-Of-State Shipping</Typography>
						<div>
							<Typography style={{textAlign:"center"}}>Complimentary shipping for racks to out-of-state customers, including Canada and Mexico</Typography>
						</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
)

export default Discounts