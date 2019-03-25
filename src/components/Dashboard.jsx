
import React from "react";
import { Route, Switch } from 'react-router-dom';
import _ from "lodash";
import { withStyles } from '@material-ui/core/styles';
import { Responsive, WidthProvider } from "react-grid-layout";
import Container from "./Container"; 
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faQuestion, faSync } from '@fortawesome/free-solid-svg-icons'
import buttonExample from '../images/buttonExample.png'

library.add(faPencilAlt, faQuestion, faSync)

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const styles = theme => ({
  todo: {
    backgroundColor: 'pink', 
    color: 'black', 
    padding: 10, 
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

  selectionInputs: {

  },

  actionButtons: {
    marginLeft: 10, 
    marginRight: 10, 
  },

  icons: {
    padding: 10,
  }, 

  formControl: {
    margin: theme.spacing.unit,
    display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row'
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
    onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateLayout()
  };

  state = {
    currentBreakpoint: "sm",
    compactType: "vertical",
    mounted: false,
    layouts: { lg: this.props.initialLayout }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i} style={{backgroundColor: "yellow"}}>
          <Route exact path='/' render={(props) => <Container {...props}>{i}</Container>} />
        </div>
      );
    });
  }
  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical" ? null : "horizontal";
    this.setState({ compactType });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
  };

  onNewLayout = () => {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.gridStyle}>
        {/* <div>
          Current Breakpoint: {this.state.currentBreakpoint} ({
            this.props.cols[this.state.currentBreakpoint]
          }{" "}
          columns)
        </div>
        <div>
          Compaction type:{" "}
          {_.capitalize(this.state.compactType) || "No Compaction"}
        </div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button> */}
      
      <div className={classes.todo}>
       {/* this has to be removed later */}
        <h5 style={{color: 'red'}}> Please Fix: Issue: Material UI "input label" overlapping</h5>
        <h5 style={{color: 'red'}}> TODO:Make buttons clickable + with rounded circle like: <img src={buttonExample} /></h5>
      </div>


      <div className={classes.actionBarStyle}>
        <div className={classes.selectionInputs}>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="stage-simple" >Select A Stage</InputLabel>
              <Select
                value={this.state.age}
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
            
              <InputLabel htmlFor="stage-simple" >Select Stage Details</InputLabel>
              <Select
                value={this.state.age}
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

              <InputLabel htmlFor="stage-simple" >Select A Game</InputLabel>
              <Select
                value={this.state.age}
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
          <FontAwesomeIcon className={classes.icons} spin border size="lg" icon="sync" />
          <FontAwesomeIcon className={classes.icons} spin border size="lg" icon="pencil-alt" />
          <FontAwesomeIcon className={classes.icons} spin border size="lg" icon="question" />
        </div>
      </div>
        

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          breakpoints={{lg: 2000, md: 996, sm: 768, xs: 480, xxs: 0}}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={true}
          isDraggable= {true}
          isResizable= {true}
          measureBeforeMount={false}
          autoSize={true}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}


function generateLayout() {
  return _.map(_.range(0, 7), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      // static: Math.random() < 0.05
    };
  });
}

export default withStyles(styles)(Dashboard)