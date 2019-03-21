
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import Container from "./Container"; 
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const gridStyle = {
  padding: 20, 
  margin: 30, 
  color: 'black', 
  backgroundColor: '#eee', 
  alignContent: 'center', 
  textAlign: 'center', 
}; 
class Grid extends React.Component {
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
    return (
      <div style={gridStyle}>
        <div >
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
        </button>

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


export default Grid; 