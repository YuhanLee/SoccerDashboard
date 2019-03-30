
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import React from "react";
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: 10, 
  },
});

const events = [
  {
    title: <h5>hello</h5>,
    icon: <Avatar><Icon>work</Icon></Avatar>,
  },
  {
    title: <h5>world</h5>,
    icon: <Avatar><Icon>home</Icon></Avatar>,
  },
  {
    title: <h5>world</h5>,
    icon: <Avatar><Icon>home</Icon></Avatar>,
  },
  {
    title: <h5>world</h5>,
    icon: <Avatar><Icon>home</Icon></Avatar>,
  },
  {
    title: <h5>world</h5>,
    icon: <Avatar><Icon>home</Icon></Avatar>,
  },
  {
    title: <h5>world</h5>,
    icon: <Avatar><Icon>home</Icon></Avatar>,
  },
  {
    title: <h5>world</h5>,
    icon: <Avatar><Icon>home</Icon></Avatar>,
  },
];

 class TimelineContainer extends React.Component {
  state = {
  
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Timeline style={{ overflowY: 'scroll'}}events={events}/>
      </div>
    ); 
  }
 }; 


 export default withStyles(styles)(TimelineContainer);
