
import { withStyles } from '@material-ui/core/styles';
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import teamIcon from '../../src/icons/soccer_icons/png/005-soccer-game-1.png'
import shotsIcon from '../../src/icons/soccer_icons/png/037-soccer-ball.png'; 
import shotsAccuracyIcon from '../../src/icons/soccer_icons/png/011-soccer.png'; 
import passesIcon from '../../src/icons/soccer_icons/png/017-soccer-player-1.png'; 
import cornerIcon from '../../src/icons/soccer_icons/png/036-corner.png'; 
import yellowCardIcon from '../../src/icons/soccer_icons/png/049-yellow-card.png'; 
import redCardIcon from '../../src/icons/soccer_icons/png/048-red-card.png'; 

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
  },
  table: {
    minWidth: 200
  },
  column: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },

  tableHead: {
    backgroundColor: '#282c34', 
  }, 

  head:{
    align: "center",
    width:"100%",
  },
});

let id = 0;
function createData(team, shots, shotsAccuracy, passes, corners, yellowCard, redCard) {
  id += 1;
  return { id, team, shots, shotsAccuracy, passes, corners, yellowCard, redCard };
}
const rows = [
  createData("Home", '8(6)', '75%', '289', '8', '2', '0'),
  createData("Away", '14(4)', '28.6%', '528', '5', '11', '1', '0'),
];

 class GameStatsContainer extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={teamIcon}></Avatar><h2>Teams</h2></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={shotsIcon}></Avatar><h2>Shots</h2></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={shotsAccuracyIcon}></Avatar><h2>Accuracy</h2></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={passesIcon}></Avatar><h2>Passes</h2></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={cornerIcon}></Avatar><h2>Corners</h2></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={yellowCardIcon}></Avatar><h2>Yellow Card</h2></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={redCardIcon}></Avatar><h2>Red Card</h2></CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  <h2>{row.team}</h2>
                </CustomTableCell>
                <CustomTableCell align="center"><h2>{row.shots}</h2></CustomTableCell>
                <CustomTableCell align="center"><h2>{row.shotsAccuracy}</h2></CustomTableCell>
                <CustomTableCell align="center"><h2>{row.passes}</h2></CustomTableCell>
                <CustomTableCell align="center"><h2>{row.corners}</h2></CustomTableCell>
                <CustomTableCell align="center"><h2>{row.yellowCard}</h2></CustomTableCell>
                <CustomTableCell align="center"><h2>{row.redCard}</h2></CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
 }; 


 export default withStyles(styles)(GameStatsContainer);
