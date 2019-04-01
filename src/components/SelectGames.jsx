import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: '#282c34', 
    height: '100vh',
    width: '100%', 
    minHeight: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

})

class SelectGames extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <h1 style={{marginTop: '0px'}}> customize your dashboard </h1>
      </div>
    ); 
  }

}


export default withStyles(styles)(SelectGames)