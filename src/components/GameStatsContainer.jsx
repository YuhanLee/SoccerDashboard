
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from'@material-ui/core/Grid'; 
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    overflowY: "scroll",
  },
  table: {
    minWidth: 200
  },
  column: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },

  head:{
    align: "center",
    width:"100%",
  },
});

let id = 0;
function createData(stats) {
  id += 1;
  return {stats};
}

const myStats = [
  createData("Shots(on Target)"),
  createData("ShotsAccuracy"),
  createData("Passes"),
  createData("Corners"),
  createData("Yellow Card"),
  createData("Red Card"),
];

const hometeamStats = [
  createData("8(6)"),
  createData("75%"),
  createData("289"),
  createData("8"),
  createData("2"),
  createData("0"),
];

const awayteamStats = [
  createData("14(4)"),
  createData("28.6%"),
  createData("528"),
  createData("5"),
  createData("1"),
  createData("0"),
];

 class GameStatsContainer extends React.Component {

  render() {
    const { classes } = this.props;

    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
              <TableRow> 

              <CustomTableCell className={classes.head}>
                <h3>        </h3>
              </CustomTableCell>
              </TableRow>
            </TableHead>
            {
              myStats.map(column =>(
                <TableCell key={column.id}>
                  <CustomTableCell align="center">{column.stats}</CustomTableCell>
                </TableCell>
              ))
            }
          <TableRow>     {/* 2nd row  */}
            <TableHead>
              <CustomTableCell className={classes.head}>
                <h3>HomeTeam</h3>
              </CustomTableCell>
            </TableHead> 
            {
              hometeamStats.map(column =>(
                <TableCell key={column.id}>
                  <CustomTableCell>{column.stats}</CustomTableCell>
                </TableCell>
              ))
            }
          </TableRow>
          <TableRow>   {/* 3rd row  */}
            <TableHead>
                <CustomTableCell className={classes.head}>
                  <h3>AwayTeam</h3>
                </CustomTableCell>
              </TableHead>
              {
                awayteamStats.map(column =>(
                  <TableCell key={column.id}>
                    <CustomTableCell align="center">{column.stats}</CustomTableCell>
                  </TableCell>
              ))
            }
          </TableRow>
        
        </Table>
      </Paper>
    );
  }
 }; 


 export default withStyles(styles)(GameStatsContainer);
