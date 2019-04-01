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
import GameStatsContainer from "./GameStatsContainer";
import ReactLoading from 'react-loading';


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
    paddingTop: 20
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

  subLoader: {
    padding: '20px', 
    paddingTop: '250px', 
    paddingBottom: '300px', 
    display:'flex', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  scoreLoader: {
    padding: '20px', 
    paddingBottom: '100px', 
    display:'flex', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 

  lineupLoader: {
    padding: '60px', 
    paddingBottom: '100px', 
    display:'flex', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  }, 

  gameStatsLoader: {
    padding: '40px', 
    paddingBottom: '200px', 
    display:'flex', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
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
    refreshMode: true, 
    //TODO: fix this refreshMode to true
  };

  componentDidMount() {
    this.setState({ mounted: true });
    setTimeout(this.refreshDone, 2000); //TODO: uncomment this
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onEditDashboard = () => {
    this.setState({editMode : !this.state.editMode})
  }; 

  onRefreshData = () => {
    var self = this;
    this.setState({refreshMode : !this.state.refreshMode})

    setTimeout(this.refreshDone, 2000);   
  }

  refreshDone = () => {
    this.setState({refreshMode : !this.state.refreshMode})
  }

  getTimelineStyle = () => {
    return {
      overflowY: 'scroll', 
      backgroundColor: this.state.refreshMode ? 'white' : '#45bc67'
     }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.gridStyle}>
        <div className={classes.actionBarStyle}>
          <div className={classes.selectionInputs}>
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel style={{paddingBottom: '10'}} htmlFor="stage-simple"><h4>Select A Stage</h4></InputLabel>
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
                <InputLabel htmlFor="stage-simple"><h4>Select Stage Details</h4></InputLabel>
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
                <InputLabel className={classes.inputLabel} htmlFor="stage-simple"><h4>Select A Game</h4></InputLabel>
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

        <IconButton className={classes.button} onClick={this.onRefreshData} aria-label="Sync">
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

        <div key={0} style={{backgroundColor: "white", overflowY: 'auto'}}>
          <Container title="Substitutions"></Container>
          {
            this.state.refreshMode && 
            <div className={classes.subLoader}>
              <ReactLoading type={'spinningBubbles'} color={'black'} height={'30%'} width={'30%'} />
            </div>
          }
          <SubstitutionContainer/>
         
        </div>
        <div key={1} style={{backgroundColor: "white"}}>
          <Container title="Scoreboard"></Container>
          {
            this.state.refreshMode && 
            <div className={classes.scoreLoader}>
              <ReactLoading type={'spinningBubbles'} color={'black'} height={'8%'} width={'8%'} />
            </div>
          }
          <ScoreBoardContainer/>
         
        </div>  
        <div key={2} style={{backgroundColor: "white", overflowY: 'auto'}}>
          <Container title="Lineup"></Container>

          {
            this.state.refreshMode && 
            <div className={classes.lineupLoader}>
              <ReactLoading type={'spinningBubbles'} color={'black'} height={'20%'} width={'20%'} />
            </div>
          }

          <LineupContainer/> 
        </div>
        <div key={3} style={{backgroundColor: "white"}}>
        <Container title="Game Stats"></Container>
          {
            this.state.refreshMode && 
            <div className={classes.gameStatsLoader}>
              <ReactLoading type={'spinningBubbles'} color={'black'} height={'20%'} width={'20%'} />
            </div>
          }
          <GameStatsContainer/>
        
        </div>
    
        <div key={4} style={this.getTimelineStyle()}>
          <Container title="Timeline"></Container>
          {
            this.state.refreshMode && 
            <div className={classes.subLoader}>
              <ReactLoading type={'spinningBubbles'} color={'black'} height={'30%'} width={'30%'} />
            </div>
          }
          <TimelineContainer style={this.getTimelineStyle()}/>
        </div>

      </ResponsiveReactGridLayout>

      </div>
    );
  }
}


function generateDefaultLayout() {
  var subContainer = {x: 7, y: 0, w: 3, h: 19, i: "0"};
  var scoreContainer = {x: 3, y: 0, w: 4, h: 4, i: "1"};
  var lineUpContainer = {x: 3, y: 4, w: 4, h: 8, i: "2"};
  var gameStatsContainer = {x: 3, y: 12, w: 4, h: 7, i: "3"};
  var timelineContainer = {x: 0, y: 0, w: 3, h: 19, i: "4"};

  var originalContainerConfig = [ subContainer, scoreContainer, lineUpContainer, gameStatsContainer, timelineContainer]; 
  return originalContainerConfig; 
}

export default withStyles(styles)(Dashboard)