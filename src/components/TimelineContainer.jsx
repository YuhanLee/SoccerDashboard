import { withStyles } from '@material-ui/core/styles';
import React from "react";
import { Timeline } from 'react-material-timeline';
import { Avatar } from '@material-ui/core';
import goalIcon from '../../src/icons/soccer_icons/png/037-soccer-ball.png'; 
import yellowCardIcon from '../../src/icons/soccer_icons/png/049-yellow-card.png'; 
import subIcon from '../../src/icons/soccer_icons/png/027-substitute-player.png'; 

const styles = theme => ({
  root: {
    margin: 10, 
  },
});

const events = [
  {
    title: <h5>18'</h5>,
    subheader: <h3 style={{color: 'black'}}>Mario Mandzukic</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h5>27'</h5>,
    subheader: <h3 style={{color: 'black'}}>N'Golo Kanté</h3>,
    icon: <Avatar src={yellowCardIcon}></Avatar>,
  },
  {
    title: <h5>28'</h5>,
    subheader: <h3 style={{color: 'black'}}>Ivan Perisic Assist Domagoj Vida</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h5>38'</h5>,
    subheader: <h3 style={{color: 'black'}}>Antoine Griezmann</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h5>41'</h5>,
    subheader: <h3 style={{color: 'black'}}>Lucas Hernández</h3>,
    icon: <Avatar src={yellowCardIcon}></Avatar>,
  },
  {
    title: <h5>55'</h5>,
    subheader: <h3 style={{color: 'black'}}>N'Zonzi SO N'Golo Kanté</h3>,
    icon: <Avatar src={subIcon}></Avatar>,
  },
  {
    title: <h5>59'</h5>,
    subheader: <h3 style={{color: 'black'}}>Paul Pogba</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h5>65'</h5>,
    subheader: <h3 style={{color: 'black'}}>Kylian Mbappé Assist Lucas Hernández</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },  
  {
    title: <h5>69'</h5>,
    subheader: <h3 style={{color: 'black'}}>Mario Mandzukic</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },  
  {
    title: <h5>71'</h5>,
    subheader: <h3 style={{color: 'black'}}>Andrej Kramaric SO Ante Rebic</h3>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },  
  {
    title: <h5>73'</h5>,
    subheader: <h3 style={{color: 'black'}}>Corentin Tolisso SO Blaise Matuidi</h3>,
    icon: <Avatar src={subIcon}></Avatar>,
  },  
  {
    title: <h5>81'</h5>,
    subheader: <h3 style={{color: 'black'}}>Marko Pjaca SO Ivan Strinic</h3>,
    icon: <Avatar src={subIcon}></Avatar>,
  },  
  {
    title: <h5>81'</h5>,
    subheader: <h3 style={{color: 'black'}}>Nabil Fekir SO Olivier Giroud</h3>,
    icon: <Avatar src={subIcon}></Avatar>,
  },
  {
    title: <h5>92'</h5>,
    subheader: <h3 style={{color: 'black'}}>Sime Vrsaljko</h3>,
    icon: <Avatar src={yellowCardIcon}></Avatar>,
  },
];

 class TimelineContainer extends React.Component {
  state = {
  
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Timeline events={events}/>
      </div>
    ); 
  }
 }; 


 export default withStyles(styles)(TimelineContainer);
