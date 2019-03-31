import { withStyles } from '@material-ui/core/styles';
import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import franceFlag from '../../src/icons/country_icons/france.png'; 
import croatiaFlag from '../../src/icons/country_icons/croatia.png'; 

const styles = theme => ({

  gridStyle: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    direction:'row',
    spacing: 20,
    height: '100%',
    width: '100%',
  },

  avatar: {
    margin: 5,
  },
});
class ScoreBoardContainer extends React.Component{ 
  render(){
    const { classes } = this.props;

    return(
        <Grid className={classes.gridStyle}>
          <Grid container justify="center" alignItems="center" direction="row" padding-top = "10">
                <Avatar className={classes.avatar} alt="Fr" src={franceFlag}/>
                <h3>France</h3>
          </Grid>
 
              
          <Grid>
              <Typography container variant ="h2"> 4:2 </Typography>
          </Grid>
              
          <Grid container justify="center" alignItems="center" direction="row">
              <Avatar className={classes.avatar} alt="Cr" src={croatiaFlag}/>
              <h3>Croatia </h3>
          </Grid>
        </Grid>
    )
  }
}

export default withStyles(styles)(ScoreBoardContainer); 