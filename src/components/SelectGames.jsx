import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import color from "@material-ui/core/colors/purple";


const styles = theme => ({
  background: {
    backgroundColor: '#282c34', 
    // backgroundImage: 'require(../../src/images/Field.jpg)',
    height: '100vh',
    width: '100%', 
    minHeight: '100vh', 
  
  }, 

  root:{
    width: "70%",
    padding: '40px',
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

  gobutton: {
    width: '100%', 
    height: '70%', 
    color: 'white',  
    textAlign: 'center', 
    alignContent: 'center', 
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
          <h1 style={{fontSize: '50px', marginTop: '0px'}}> Customize Your Soccer Dashboard </h1>
        </div>
        <h2 style={{fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '0px' }}> Start Tracking your favourite games</h2>
        
        
        <div className={classes.contents}>
          <Paper className={classes.root}>
            <p style={{color:'black'}}> Please Select the Region </p>
            <div className={classes.RegionSelect}  style={{color:'black'}}>
              <Select options={selectRegion}/>
            </div>
            <p style={{color:'black'}}> Please Select the League </p>
            <div className={classes.GameSelect} style={{marginBottom:'10px', color:'black'}}>
              <Select options={selectevent}/>
            </div>

            <div className={classes.gobutton}>
            <Button className={classes.signUpButton} onClick={this.goClick}><h3 style={{marginTop: '5px', marginBottom: '5px'}}>Go</h3></Button>
            </div>
          </Paper>
        </div>
        
      </div>
    ); 
  }

}


export default withStyles(styles)(SelectGames)