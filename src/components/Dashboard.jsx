import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Responsive, WidthProvider } from "react-grid-layout";
import Container from "./Container"; 
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from'@material-ui/core/Grid'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import { faPencilAlt, faQuestionCircle, faSync, faSave } from '@fortawesome/free-solid-svg-icons'
import SubstitutionContainer  from './SubstitutionContainer'; 
import LineupContainer from './LineupContainer'; 
import ScoreBoardContainer from './ScoreBoardContainer'; 
import TimelineContainer from "./TimelineContainer";

library.add(faPencilAlt, faQuestionCircle, faSync, faSave)

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const EditSaveIcon = ({ editMode, onClick }) => {
  return (
    <div onClick={onClick} >
      <FontAwesomeIcon icon={editMode ? 'save' : 'pencil-alt'}/>
    </div>
  );
};

const styles = theme => ({
  button: {
    margin: (theme.spacing.unit)/2,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  actionBarStyle: {
    display: 'flex', 
    padding: 20, 
    backgroundColor: 'white', 
    justifyContent: 'space-between', 
    color: 'black', 
  }, 

  selectBox: {
    minWidth: 200, 
    // display: 'inline-block',
  },

  actionButtons: {
    marginLeft: 10, 
    marginRight: 10, 
  },

  icons: {
    padding: 3,
  }, 

  formControl: {
    margin: theme.spacing.unit,
    display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row',
    minWidth: 200, 
  },

  gridStyle: {
    padding: 20, 
    margin: 30, 
    color: 'black', 
    backgroundColor: '#eee', 
    alignContent: 'center', 
    textAlign: 'center'
  }, 
});


class Dashboard extends React.Component {
  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    // onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateDefaultLayout(), 
  };
  state = {
    currentBreakpoint: "sm",
    compactType: "vertical",
    mounted: false,
    layouts: { lg: this.props.initialLayout }, 
    editMode: false, 
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onEditDashboard = () => {
    this.setState({editMode : !this.state.editMode})
  }; 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.gridStyle}>
        <Grid
          style={{backgroundColor: 'pink'}}
          container
          direction="row"
          justify="center"
          alignItems="center">
        </Grid>
        <div className={classes.actionBarStyle}>
          <div className={classes.selectionInputs}>
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel  htmlFor="stage-simple" >Select A Stage</InputLabel>
                <Select
                  className={classes.selectBox}
                  value="tmp"
                  onChange={this.handleChange}
                  inputProps={{
                    name: "stage",
                    id: "stage-simple"
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="stage-simple" >Select Stage Details</InputLabel>
                <Select
                  className={classes.selectBox}
                  value="tmp"
                  onChange={this.handleChange}
                  inputProps={{
                    name: "details",
                    id: "details-simple"
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel} htmlFor="stage-simple" >Select A Game</InputLabel>
                <Select
                  className={classes.selectBox}
                  value="tmp"
                  onChange={this.handleChange}
                  inputProps={{
                    name: "game",
                    id: "game-simple"
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>    
            </form> 
          </div>    
        <div className={classes.actionButtons}>

        <IconButton className={classes.button} aria-label="Sync">
          <FontAwesomeIcon className={classes.icons} size="sm" icon="sync" />
        </IconButton>

        <IconButton className={classes.button} onClick={this.onEditDashboard}  aria-label="Edit">
          <EditSaveIcon editMode={this.state.editMode} />
        </IconButton>

        <IconButton className={classes.button} aria-label="Help">
          <FontAwesomeIcon className={classes.icons} size="sm" icon="question-circle" />
        </IconButton>
        </div>
      </div>
    
      <ResponsiveReactGridLayout
        {...this.props}
        layouts={this.state.layouts}
        breakpoints={{lg: 2000, md: 996, sm: 768, xs: 480, xxs: 0}}
        onBreakpointChange={this.onBreakpointChange}
        // WidthProvider option
        measureBeforeMount={true}
        isDraggable= {this.state.editMode}
        isResizable= {this.state.editMode}
        autoSize={true}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        useCSSTransforms={this.state.mounted}
        compactType={this.state.compactType}
        preventCollision={!this.state.compactType}
      >

        <div key={0} style={{backgroundColor: "white"}}>
          <Container title="Substitutions"> </Container>
          <SubstitutionContainer/>
        </div>
        <div key={1} style={{backgroundColor: "white"}}>
          <Container title="Scoreboard"></Container>
        <ScoreBoardContainer/>
         
        </div>  
        <div key={2} style={{backgroundColor: "white"}}>
          <Container title="Lineup"></Container>
          {/* <LineupContainer/>  */}
        </div>
        <div key={3} style={{backgroundColor: "white"}}>
        <Container title="Game Stats"></Container>
        </div>
        <div key={4} style={{backgroundColor: "#45bc67", overflowY: 'auto'}}>
          <Container title="Timeline"></Container>
          <TimelineContainer style={{overflowY: 'auto'}}/>
        </div>

      </ResponsiveReactGridLayout>

      </div>
    );
  }
}


function generateDefaultLayout() {
  var subContainer = {x: 7, y: 0, w: 3, h: 19, i: "0"};
  var scoreContainer = {x: 3, y: 0, w: 4, h: 4, i: "1"};
  var lineUpContainer = {x: 3, y: 4, w: 4, h: 9, i: "2"};
  var gameStatsContainer = {x: 3, y: 13, w: 4, h: 6, i: "3"};
  var timelineContainer = {x: 0, y: 0, w: 3, h: 19, i: "4"};

  var originalContainerConfig = [ subContainer, scoreContainer, lineUpContainer, gameStatsContainer, timelineContainer]; 
  return originalContainerConfig; 
}

export default withStyles(styles)(Dashboard)