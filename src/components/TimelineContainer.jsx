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
    title: <h3>18'</h3>,
    subheader: <h2 style={{color: 'black'}}>Mario Mandzukic</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h3>27'</h3>,
    subheader: <h2 style={{color: 'black'}}>N'Golo Kanté</h2>,
    icon: <Avatar src={yellowCardIcon}></Avatar>,
  },
  {
    title: <h3>28'</h3>,
    subheader: <h2 style={{color: 'black'}}>Ivan Perisic Assist Domagoj Vida</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h3>38'</h3>,
    subheader: <h2 style={{color: 'black'}}>Antoine Griezmann</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h3>41'</h3>,
    subheader: <h2 style={{color: 'black'}}>Lucas Hernández</h2>,
    icon: <Avatar src={yellowCardIcon}></Avatar>,
  },
  {
    title: <h3>55'</h3>,
    subheader: <h2 style={{color: 'black'}}>N'Zonzi SO N'Golo Kanté</h2>,
    icon: <Avatar src={subIcon}></Avatar>,
  },
  {
    title: <h3>59'</h3>,
    subheader: <h2 style={{color: 'black'}}>Paul Pogba</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },
  {
    title: <h3>65'</h3>,
    subheader: <h2 style={{color: 'black'}}>Kylian Mbappé Assist Lucas Hernández</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },  
  {
    title: <h3>69'</h3>,
    subheader: <h2 style={{color: 'black'}}>Mario Mandzukic</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },  
  {
    title: <h3>71'</h3>,
    subheader: <h2 style={{color: 'black'}}>Andrej Kramaric SO Ante Rebic</h2>,
    icon: <Avatar src={goalIcon}></Avatar>,
  },  
  {
    title: <h3>73'</h3>,
    subheader: <h2 style={{color: 'black'}}>Corentin Tolisso SO Blaise Matuidi</h2>,
    icon: <Avatar src={subIcon}></Avatar>,
  },  
  {
    title: <h3>81'</h3>,
    subheader: <h2 style={{color: 'black'}}>Marko Pjaca SO Ivan Strinic</h2>,
    icon: <Avatar src={subIcon}></Avatar>,
  },  
  {
    title: <h3>81'</h3>,
    subheader: <h2 style={{color: 'black'}}>Nabil Fekir SO Olivier Giroud</h2>,
    icon: <Avatar src={subIcon}></Avatar>,
  },
  {
    title: <h3>92'</h3>,
    subheader: <h2 style={{color: 'black'}}>Sime Vrsaljko</h2>,
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
