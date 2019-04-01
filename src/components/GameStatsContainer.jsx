
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
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={teamIcon}></Avatar><h3>Teams</h3></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={shotsIcon}></Avatar><h3>Shots</h3></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={shotsAccuracyIcon}></Avatar><h3>Shot Accuracy</h3></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={passesIcon}></Avatar><h3>Passes</h3></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={cornerIcon}></Avatar><h3>Corners</h3></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={yellowCardIcon}></Avatar><h3>Yellow Card</h3></CustomTableCell>
              <CustomTableCell className={classes.tableHead} align="center"><Avatar src={redCardIcon}></Avatar><h3>Red Card</h3></CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  <h4>{row.team}</h4>
                </CustomTableCell>
                <CustomTableCell align="center"><h4>{row.shots}</h4></CustomTableCell>
                <CustomTableCell align="center"><h4>{row.shotsAccuracy}</h4></CustomTableCell>
                <CustomTableCell align="center"><h4>{row.passes}</h4></CustomTableCell>
                <CustomTableCell align="center"><h4>{row.corners}</h4></CustomTableCell>
                <CustomTableCell align="center"><h4>{row.yellowCard}</h4></CustomTableCell>
                <CustomTableCell align="center"><h4>{row.redCard}</h4></CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
 }; 


 export default withStyles(styles)(GameStatsContainer);
