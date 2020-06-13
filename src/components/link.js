import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink style={{width: "16.25rem", height: "3.75rem", fontSize:"1.25rem", backgroundColor:"rgba(0,0,0,0.5)", zIndex:1, marginRight: "4.6875rem"}} component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;