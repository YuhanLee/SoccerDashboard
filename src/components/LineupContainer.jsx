import { withStyles } from '@material-ui/core/styles';
import React from "react";

const styles = theme => ({

})

class LineupContainer extends React.Component {
  state = {
    shouldUpdate: doShit(), 
  };

 
  render() {
    return (
      <h1> hello </h1>
    );
  }





}

function doShit() {
  console.log("wew"); 
}

export default withStyles(styles)(LineupContainer);
