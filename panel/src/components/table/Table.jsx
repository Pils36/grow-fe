import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { Link } from "react-router-dom";

const List = ({data}) => { 

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCellUse">User</TableCell>
            <TableCell className="tableCellNum">Phone Number</TableCell>
            <TableCell className="tableCellDat">Email</TableCell>
            <TableCell className="tableCellCro">Crops</TableCell>
            <TableCell className="tableCellSta">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="tableCell"> 
                  <div className="cellWrapper">
                      <img src={item.avatar} alt="" className="image" />
                      <Link to={'/users/personalinfo?id=' +item._id}>{item.fullName}</Link>
                  </div>
              </TableCell>
              <TableCell className="tableCell">{item.phoneNumber}</TableCell>
              <TableCell className="tableCell">{item.email}</TableCell>
              <TableCell className="tableCell">{item.crops}</TableCell>
              <TableCell className="tableCellStatus">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List






































