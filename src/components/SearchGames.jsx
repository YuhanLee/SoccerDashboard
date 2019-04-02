import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select';

const styles = theme => ({
  background: {
    backgroundColor: '#282c34', 
    height: '100vh',
    width: '100%', 
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
  }, 
  selectionContainer: {
    display: 'flex',
    justifyContent: 'center',
  }
})


const options = [
  { value: 'france vs croatia', label: 'France vs. Croatia' },
  { value: 'france vs australia', label: 'France vs. Australia' },
  { value: 'france vs argentina', label: 'France vs. Argentina' }, 
  { value: 'france vs uruguay', label: 'France vs. Uruguay' }
];

class SearchGames extends React.Component {
  state = {
    selectedOption: null,
  }; 

  render() {
    const { selectedOption } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <h1 style={{marginTop: '0px', paddingTop: '200px'}}> Search For a Game </h1>
        
        <div className={classes.selectionContainer}>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
      </div>
      
    ); 
  }

}


export default withStyles(styles)(SearchGames)