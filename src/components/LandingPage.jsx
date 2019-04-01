import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: "60%",
    textAlign: 'left', 
    padding: '30px', 
  },
  background: {
    backgroundColor: '#282c34', 
    height: '100vh',
    width: '100%', 
    minHeight: '100vh',
  }, 

  signUpButton: {
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

  textContent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '200px', 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left', 
  }, 

  mainContent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px', 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left', 
  }, 

  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20px', 
    justifyContent: 'center',
    textAlign: 'left', 
  }, 

  signInContent: {
    display: 'flex',
    justifyContent: 'center',
    color: 'black', 
  }, 

  textFields: {
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'wrap', 
  }, 
}); 

class LandingPage extends React.Component {
  onSignUpClick = () => {
    console.log("clicked"); 
  }; 
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <div  className={classes.textContent}>
          <h1 style={{fontSize: '50px', marginTop: '0px'}}> Customize Your Soccer Dashboard </h1>
        </div>
        <h2 style={{fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '0px' }}> Start Tracking your favourite games</h2>


        <div className={classes.mainContent}>
        
          <Paper align="center" className={classes.root}>
            <div className={classes.textFields}>
              <TextField
                id="filled-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="filled"
              />

            <TextField
              id="filled-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="filled"
            />

            <div className={classes.buttonContent}>
              <Button className={classes.signUpButton} onClick={this.onSignUpClick}><h3 style={{marginTop: '5px', marginBottom: '5px',}}>Sign Up</h3></Button>
            </div>

            <div style={{color: 'black'}}>
              TODO: 
              1. Add basic validation on the method onSignUpClick()
            </div>

            <div className={classes.signInContent}>
              <h3>Already have an account? Sign in <a href="#" style={{color: '#006CBB'}}>here</a></h3>
            </div>

          </div>
        </Paper>
        </div>
      </div>
    ); 
  }

}


export default withStyles(styles)(LandingPage)