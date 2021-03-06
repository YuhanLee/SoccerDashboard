import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Route, withRouter } from 'react-router-dom'; 
import backImage from '../../src/images/cheering.jpg';


const styles = theme => ({
  root: {
    width: "60%",
    textAlign: 'left', 
    padding: '30px', 
    borderRadius: '10px',
  },
  background: {
    linearGradient: 'rgba(0, 0, 0, 0)',
    backgroundImage: 'url('+ backImage +')',
    backgroundSize: 'cover',
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

  state = {
    user: {
        password: '',
        email: '',
    },
};

componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== this.state.user.password) {
            return false;
        }
        return true;
    });
}

handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
}
handleSubmit = () => {
  // your submit logic
}

  onSignUpClick = () => {
    console.log("clicked"); 

  }; 
  render() {
    const { classes } = this.props;
    const {user} = this.state;
    return (
      <div className={classes.background}>
        <div  className={classes.textContent}>
          <h1 style={{fontSize: '50px', marginTop: '0px'}}> Customize Your Soccer Dashboard </h1>
        </div>
        <h2 style={{fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '0px' }}> Start Tracking your favourite games</h2>


        <div className={classes.mainContent}>
        
          <Paper align="center" className={classes.root}>
          <ValidatorForm onSubmit={this.handleSubmit}>
            <div className={classes.textFields}>
              
            <TextValidator
                id="filled-email-input"
                label="Email"
                onChange={this.handleChange}
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                value={user.email}
                validators={['required!']}
                errorMessages={['this field is required']}
              />

            <TextValidator
              id="filled-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              name = "password"
              autoComplete="current-password"
              margin="normal"
              onChange={this.handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
              value={user.password}
            />
            
            <div className={classes.buttonContent}>
              <Button className={classes.signUpButton} onClick={() => this.props.history.push('selectGames')}><h3 style={{marginTop: '5px', marginBottom: '5px',}}>Sign Up</h3></Button>
            </div>
    
            <div className={classes.signInContent}>
              <h3>Already have an account? Sign in <a href="#" style={{color: '#006CBB'}}>here</a></h3>
            </div>

          </div>
          </ValidatorForm>
        </Paper>
        </div>
      </div>
    ); 
  }

}

export default withRouter(LandingPage) && withStyles(styles)(LandingPage)