import { withStyles } from '@material-ui/core/styles';
import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import franceFlag from '../../src/icons/country_icons/france.png'; 
import croatiaFlag from '../../src/icons/country_icons/croatia.png'; 
import { red } from '@material-ui/core/colors';

const styles = theme => ({
  scoreBoard: {
    paddingTop: '20px', 
  }, 

  gridStyle: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    direction:'row',
    spacing: 10,
    width: '100%',
  },

  avatar: {
    margin: 5,
  },

  hometeam:{
    color : 'red',
  },

  awayteam:{
    color : 'blue',
  },
});
class ScoreBoardContainer extends React.Component{ 
  render(){
    const { classes } = this.props;

    return(

      <div className={classes.scoreBoard}>
        <Grid className={classes.gridStyle}>
          <Grid container justify="center" alignItems="center" direction="row" padding-top = "10">
            <Avatar className={classes.avatar} alt="Fr" src={franceFlag}/>
            <h3 className={classes.hometeam}>France</h3>
          </Grid>
 
          <Grid className={classes.gridStyle}>
            <Typography container><h2>4 : 2</h2></Typography>
          </Grid>
              
          <Grid container justify="center" alignItems="center" direction="row">
            <Avatar className={classes.avatar} alt="Cr" src={croatiaFlag}/>
            <h3 className={classes.awayteam}>Croatia </h3>
          </Grid>
        </Grid>
        </div>
    )
  }
}

export default withStyles(styles)(ScoreBoardContainer); 