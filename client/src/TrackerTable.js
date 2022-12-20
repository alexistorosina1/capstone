import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TrackerForm from "./TrackerForm";
function TrackerTable({ rows = [], handleAddExercise, date}){
    return(
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{}}>
                        <TableCell sx={{fontSiza: "1ex"}}>Exercise</TableCell>
                        <TableCell sx={{fontSiza: "1ex"}} align="right">Sets</TableCell>
                        <TableCell sx={{fontSiza: "1ex"}} align="right">Reps</TableCell>
                        <TableCell sx={{fontSiza: "1ex"}} align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) =>(
                        <TableRow
                        key={row.exercise}
                        sx={{ backgroundColor: "#dcdcdc", "&:last-child td , &:last-child th" : { border: 0 }}}
                        >
                            <TableCell sx={{ fontSize: ".8ex"}} component="th" scope="row">{row.exercise}</TableCell>
                            <TableCell sx={{ fontSize: ".8ex"}} align="right">{row.sets}</TableCell>
                            <TableCell sx={{ fontSize: ".8ex"}} align="right">{row.reps}</TableCell>
                            <TableCell sx={{ fontSize: ".8ex"}} align="right">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Paper sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <TrackerForm handleAddExercise={handleAddExercise} date={date} />
            </Paper>
        </TableContainer>
    )
}


export default TrackerTable;