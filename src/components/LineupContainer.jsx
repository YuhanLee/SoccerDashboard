import { withStyles } from '@material-ui/core/styles';

import { LiveEvents, LiveEvent, Field2D, Field3D, PlayerDetails, GameStats, TeamsTable, FieldPlay } from 'sport-stats';
import React from "react";

const styles = theme => ({

})


const homeTeam = {
  id: 1,
  name: 'Home Team',
  logoUrl: '/textures/team1.png',
  playerPositionById: [
      [1],
      [2, 3, 4, 5],
      [6, 7],
      [8, 9, 10],
      [11]
  ],
  players: [
      {
          id: 1,
          name: 'Home Player 1',
          tShirtImgUrl: '/textures/tshirt5.png',
          tShirtNr: '1',
          faceImgUrl: '/textures/generic-face.png'
      },
      {
          id: 2,
          name: 'Home Player 2',
          tShirtImgUrl: '/textures/tshirt5.png',
          tShirtNr: '2',
          faceImgUrl: '/textures/generic-face.png'
      }
    ]
  }
class LineupContainer extends React.Component {
  state = {
    shouldUpdate: doShit(), 
  };

 
  render() {
    return (
      <Field3D 
        field={this.soccerField} 
        onPlayerClick={this.playerClick} 
        homeTeam={this.homeTeam} 
        awayTeam={this.awayTeam} 
        shouldUpdate={this.state.shouldUpdate} />
    );
  }





}

function doShit() {
  console.log("wew"); 
}

export default withStyles(styles)(LineupContainer);
