import { withStyles } from '@material-ui/core/styles';
import React from "react";
import franceLineup from '../../src/images/france_lineup.png'; 
import croatiaLineup from '../../src/images/croatia_lineup.png'; 

const styles = theme => ({
  root: {
    margin: 10, 
    display:'flex', 
  }, 

  lineUpImage: {
    float: 'left', 
    width: '95%',  
  }
})

class LineupContainer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <img className={classes.lineUpImage} src={franceLineup}></img>
        </div>

        <div>
          <img className={classes.lineUpImage} src={croatiaLineup}></img>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LineupContainer);
