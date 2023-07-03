import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Name', headerName: 'NAME', width: 300 },
    { field: 'Description', headerName: 'DESCRIPTION', width: 500 },
    { field: 'Status', headerName: 'STATUS', width: 150 },
    { field: 'Action', headerName: 'ACTION', width: 300 },
];
  

const TodoLists = () => {
    const rows = useSelector((state) => state.rows);
    const dispatch = useDispatch();

    // useEffect(()=>{

    // }, [rows])

    const actionClick = (data) => {
        if(data.type === "delete") {
            dispatch({payload:data.row, type:"DELETE_TODO"});
        }
        else if (data.type === "pending" || data.type === "completed") {
            dispatch({payload:data.row, type:"MARK_COMPLETED"});
        }
        else if (data.type === "edit") {
            dispatch({payload:data.row, type:"EDIT_TODO"});
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">NAME</TableCell>
                        <TableCell align="right">DESCRIPTION</TableCell>
                        <TableCell align="right">STATUS</TableCell>
                        <TableCell align="right">ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">{row.Name}</TableCell>
                            <TableCell align="right">{row.Description}</TableCell>

                            <TableCell align="right">{row.Status ? <Button variant="contained" color="success" size="medium" onClick={() => actionClick({ row: row, type: "completed" })}>COMPLETED</Button>: <Button variant="contained" color="error" size="medium" onClick={() => actionClick({ row: row, type: "pending" })}>  PENDING  </Button>}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" size="medium" onClick={() => actionClick({ row: row, type: "edit" })}>  EDIT  </Button>
                                <Button variant="contained" color="error" size="medium" onClick={() => actionClick({ row: row, type: "delete" })}>  DELETE  </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TodoLists;