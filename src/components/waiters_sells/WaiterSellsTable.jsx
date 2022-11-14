import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const WaitersSellsTable = ({ waiters }) => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: 270}}>
      <Table stickyHeader sx={{ minWidth: 650, maxHeight: 400}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Waiter's sells</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {waiters.map((waiter) => (
            <TableRow
              key={waiter.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {waiter.name}
              </TableCell>
              <TableCell>{waiter.lastName}</TableCell>
              <TableCell>{waiter.waiterSells}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WaitersSellsTable;
