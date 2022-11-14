import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BillsTable = ({ bills }) => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: 270}}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Waiter</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill) => (
            <TableRow
              key={bill.BillId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${bill.customer.name} ${bill.customer.lastName}`}
              </TableCell>
              <TableCell>{`${bill.waiter.name} ${bill.waiter.lastName}`}</TableCell>
              <TableCell>{bill.table.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillsTable;
