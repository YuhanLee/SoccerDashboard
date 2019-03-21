
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from'@material-ui/core/Grid'; 
import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const wewStyle = {
  color: 'white', 
  alignContent: 'center', 
  textAlign: 'center', 
  
}; 

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};



class Container extends React.Component {
  constructor(props) {
    super(props);
}
  componentDidMount() {
    console.log("container mounted"); 
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <div className={wewStyle}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"/>
      </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
