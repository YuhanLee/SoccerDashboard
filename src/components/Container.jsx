
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from'@material-ui/core/Grid'; 
import React from "react";

const styles = {
  gridStyle: { 
    color: 'black', 
    paddingTop: 0, 
    alignContent: 'center', 
    textAlign: 'center', 
  }, 
  card: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Container extends React.Component {
  state = {
    title: this.props.title
  };

  componentDidMount() {
    console.log("container mounted"); 
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
          
          <h3>{this.props.title}</h3>
          
          </Grid>
      </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
