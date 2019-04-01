import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#282c34', 
    height: '100vh',
    minHeight: '100vh'
  }, 
})

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <h1> customize your dashboard </h1>

      
      </div>
    ); 
  }

}


export default withStyles(styles)(LandingPage)