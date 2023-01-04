import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TrackerForm from "./TrackerForm";
function TrackerTable({ rows, handleAddExercise, date, deleteRows }) {
  console.log("please get passed down", rows);

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Exercise
            </th>
            <th scope="col" class="px-6 py-3">
              Sets
            </th>
            <th scope="col" class="px-6 py-3">
              Reps
            </th>
            <th scope="col" class="px-6 py-3">
              Time
            </th>
            <th scope="col" class="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={row.id}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.exercise_completed}
              </th>
              <td class="px-6 py-4">{row.sets}</td>
              <td class="px-6 py-4">{row.reps}</td>
              <td class="px-6 py-4">{row.time}</td>
              <td class="px-6 py-4">
                <button onClick={(e) => deleteRows(e, row)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paper sx={{ display: "flex", justifyContent: "center" }}>
        <TrackerForm handleAddExercise={handleAddExercise} date={date} />
      </Paper>
    </div>
  );
  // <TableContainer component={Paper}>
  //     <Table aria-label="simple table">
  //         <TableHead>
  //             <TableRow sx={{}}>
  //                 <TableCell sx={{fontSize: "2ex"}}>Exercise</TableCell>
  //                 <TableCell sx={{fontSize: "2ex"}} align="right">Sets</TableCell>
  //                 <TableCell sx={{fontSize: "2ex"}} align="right">Reps</TableCell>
  //                 <TableCell sx={{fontSize: "2ex"}} align="right">Time</TableCell>
  //             </TableRow>
  //         </TableHead>
  //         <TableBody>
  //             {rows.map((row) =>(
  //                 <TableRow
  //                 key={row.id}
  //                 sx={{ backgroundColor: "#dcdcdc", "&:last-child td , &:last-child th" : { border: 0 }}}
  //                 >
  //                     <TableCell sx={{ fontSize: "2ex"}} component="th" scope="row">{row.exercise_completed}</TableCell>
  //                     <TableCell sx={{ fontSize: "2ex"}} align="right">{row.sets}</TableCell>
  //                     <TableCell sx={{ fontSize: "2ex"}} align="right">{row.reps}</TableCell>
  //                     <TableCell sx={{ fontSize: "2ex"}} align="right">{row.time}</TableCell>
  //                     <TableCell sx={{ fontSize: "2ex"}} align="right">
  //                     <button onclick={deleteRows} sx={{ fontSize: "2ex"}} align="right">🗑️</button>
  //                     </TableCell>
  //                 </TableRow>
  //             ))}
  //         </TableBody>
  //     </Table>
  //     <Paper sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
  //         <TrackerForm handleAddExercise={handleAddExercise} date={date} />
  //     </Paper>
  // </TableContainer>
}

export default TrackerTable;
