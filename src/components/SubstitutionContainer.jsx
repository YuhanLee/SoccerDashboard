
import { withStyles } from '@material-ui/core/styles';
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
    overflowY: "scroll"
  },
  table: {
    minWidth: 200
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const sub = [
  createData("Steven N'Zonzi", "Andrej Kramaric"),
  createData("Corentin Tolisso", "Marko Pjaca"),
  createData("Nabil Fekir", "Dominik Livakovic"),
  createData("Adil Rami", "Duje Caleta-Car"),
  createData("Alphonse Areola", "Filip Bradaric"),
  createData("Benjamin Mendy", "Josip Pivaric"),
  createData("Djibril Sidbe", "Lovre Kalinic"),
  createData("Florian Thauvin", "Mateo Kovacic"),
  createData("Ousmane Dembele", "Milan Badelj"),
  createData("Presnel Kimpambe", "Tin Jadvaj"),
  createData("Steve Mandanda", "Vedran Corluka")
];

let id = 0;
function createData(franceName, croatiaName) {
  id += 1;
  return { id, franceName, croatiaName };
}
class SubstitutionContainer extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">France</CustomTableCell>
              <CustomTableCell align="center">Croatia</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              sub.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell align="center">{row.franceName}</CustomTableCell>
                <CustomTableCell align="center">{row.croatiaName}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


export default withStyles(styles)(SubstitutionContainer);
