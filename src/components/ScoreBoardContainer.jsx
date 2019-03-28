import { withStyles } from '@material-ui/core/styles';
import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
          <Paper className={classes.time}>
              <Typography> July 7th 2018</Typography>
          </Paper>
        </div>
        <div>
          <Grid display = 'flex' justifyContent ='center'>
            <Paper className ={classes.board}>
              <Grid>
                <Grid item>
                  <Avatar alt="Fr" scr ="/icons/861498-soccer/png/france.png"/>
                </Grid>
                <Grid item>
                  <Typography variant ='h6' gutterBottom> France </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className ={classes.board}>
              <Grid>
                <Grid item>
                  <Typography gutterBottom> 4:1 </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className ={classes.board}>
              <Grid>
                <Grid item>
                  <Avatar alt="Cr" scr ="/icons/861498-soccer/png/crotia.png"/>
                </Grid>
                <Grid item >
                  <Typography variant ='h6' gutterBottom> Croatia </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ScoreBoardContainer);