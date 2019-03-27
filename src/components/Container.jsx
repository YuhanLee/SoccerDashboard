
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from'@material-ui/core/Grid'; 
import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  gridStyle: { 
    color: 'black', 
    paddingTop: 0, 
    alignContent: 'center', 
    textAlign: 'center', 
  }, 

  paper: {
    width: "100%",
    overflowX: "auto"
  }
});

class Container extends React.Component {
  state = {
    title: this.props.title, 
    content: this.props.content, 
  };

  componentDidMount() {
  }

  render() {
    const { classes } = this.props;  
    return (
      <div className={classes.gridStyle}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">

          <Paper className={classes.paper}>
            <h3 className="row">{this.props.title}</h3>
          </Paper>
        </Grid>
      </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
