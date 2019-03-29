import { withStyles } from '@material-ui/core/styles';
import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import franceFlag from '../../src/icons/country_icons/france.png'; 
import croatiaFlag from '../../src/icons/country_icons/croatia.png'; 

const styles = theme => ({
  root:{
    height: '100%',
    width: '100%',
  },

  time: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height : 30,
  },

  gridStyle: {
    display: 'flex', 
    justifyContent: 'center'
  },

  board:{
    margin: 'auto',
  },
});
class ScoreBoardContainer extends React.Component{ 
  render(){
    const { classes } = this.props;

    return(
      <div className ={classes.root}>
        <div>
          <Grid className={classes.gridStyle}>
            <Grid>
              <Grid item>
                <Avatar alt="Fr" src={franceFlag}/>
              </Grid>
              <Grid item>
                <h3>France </h3>
              </Grid>
            </Grid>
              
                <Grid item>
                  <Typography gutterBottom> 4:1 </Typography>
                </Grid>
              
              <Grid>
                <Grid item>
                  <Avatar alt="Cr" src={croatiaFlag}/>
                </Grid>
                <Grid item>
                  <h3>Croatia </h3>
                </Grid>
              </Grid>
          </Grid>>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ScoreBoardContainer);