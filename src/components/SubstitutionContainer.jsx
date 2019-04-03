
import { withStyles } from '@material-ui/core/styles';
import React from "react";
import Table from "@material-ui/core/Table";
import Grid from '@material-ui/core/Grid';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import franceFlag from '../../src/icons/country_icons/france.png'; 
import croatiaFlag from '../../src/icons/country_icons/croatia.png'; 

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
    minWidth: 200,
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  avatar: {
    margin: 10,
  },
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
              <CustomTableCell style={{backgroundColor: '#282c34'}} align="center">
                <Grid container justify="center" alignItems="center" direction="row">
                  <Avatar className={classes.avatar} src={franceFlag} alt="france"/>
                  <h2>France</h2>
                </Grid>
              </CustomTableCell>
              <CustomTableCell style={{backgroundColor: '#282c34'}} align="center">
                <Grid container justify="center" alignItems="center" direction="row">
                  <Avatar className={classes.avatar} src={croatiaFlag} alt="croatia"/>
                  <h2>Croatia</h2>
                </Grid>
              </CustomTableCell>
            </TableRow>
          </TableHead>
          {
            sub.map(row => (
            <TableBody>
              <TableRow key={row.id} className={classes.row} >
                <CustomTableCell align="center"><h3>{row.franceName}</h3></CustomTableCell>
                <CustomTableCell align="center"><h3>{row.croatiaName}</h3></CustomTableCell>
              </TableRow>
            </TableBody>            
            ))
          }
        </Table>
      </Paper>
    );
  }
}


export default withStyles(styles)(SubstitutionContainer);
