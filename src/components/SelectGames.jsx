import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import color from "@material-ui/core/colors/purple";
import { Route, withRouter } from 'react-router-dom'; 
import backImage from '../../src/images/cheering.jpg';

const styles = theme => ({
  background: {
    // backgroundColor: '#282c34', 
    backgroundImage: 'url('+ backImage +')',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%', 
    minHeight: '100vh', 
  
  }, 

  root:{
    width: "60%",
    padding: '30px',
    marginTop: '5px',
  },

  textContent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '200px', 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left', 
  }, 

  contents: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px', 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left', 
  }, 

  buttoncontent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20px', 
    justifyContent: 'center',
    textAlign: 'left', 
  }, 

  gobutton: {
    width: '16%', 
    height: '70%', 
    color: 'white', 
    backgroundColor: '#FF6B6B', 
    textAlign: 'center', 
    alignContent: 'center',

    "&:hover": {
      background: "#ff9a9a"
    },
  },



})

const selectevent = [
  {label : "FIFA World Cup", value: 1},
  {label : "Euro Cup", value: 2},
  {label : "Champions League", value: 3},
  {label : "Europa League", value: 4},
  {label : "AFC Cup", value: 5},
  {label : "African Nations Championship", value: 6},
  {label : "Copa America", value: 7},
  {label : "Friendlies", value: 8},
];

const selectRegion = [
  {label : "International", value: 1},
  {label : "Germany", value: 2},
  {label : "England", value: 3},
  {label : "Italy", value: 4},
  {label : "Spain", value: 5},
  {label : "France", value: 6},
  {label : "Netherlands", value: 7},
  {label : "Portugal", value: 8},
];

class SelectGames extends React.Component {

  goClick = () => {
    // Link to DashBoard
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
       
       <div  className={classes.textContent}>
          <h1 style={{fontSize: '50px', marginTop: '0px'}}> WorldWide football events are here for you to explore </h1>
        </div>
        <h2 style={{fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '0px' }}> Select a region and league you want to track</h2>
        
        
        <div className={classes.contents}>
          <Paper className={classes.root}>
            <h3 style={{color:'black'}}> Please Select the Region </h3>
            <div className={classes.RegionSelect}  style={{color:'black'}}>
              <Select options={selectRegion}/>
            </div>
            <h3 style={{color:'black'}}> Please Select the League </h3>
            <div className={classes.GameSelect} style={{marginBottom:'10px', color:'black'}}>
              <Select options={selectevent}/>
            </div>

            <div className={classes.buttoncontent}>
            <Button className={classes.gobutton} onClick={() => this.props.history.push('dashboard')}><h3 style={{marginTop: '5px', marginBottom: '5px'}}>Go</h3></Button>

            </div>
          </Paper>
        </div>
        
      </div>
    ); 
  }

}


export default withRouter(SelectGames) && withStyles(styles)(SelectGames)