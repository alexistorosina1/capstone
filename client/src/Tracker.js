import { useEffect, useState } from "react";
import MyCalendar from "./MyCalendar";
import TrackerTable from "./TrackerTable";
import dayjs from "dayjs";


function Tracker({user}){
    const [rows, setRows] = useState([]);
    const [date, setDate] = useState(new Date().toDateString());

    const handleAddExercise = (exercise) => {
        const newRows = [exercise, ...rows]
        setRows(newRows)
    }

    // function getRows(){
    //     fetch("/getexercises")
    //     .then(r => {
    //         if(r.ok) {
    //             r.json().then(rows => setRows(rows));
    //         }
    //     })
    // }

    useEffect(() => {
        fetch("/workouts")
        .then (r => r.json())
        .then(data => setRows(data))
    }, [])

    console.log("Rows in tracker:", rows)

    function updateRows(rowDeleted) {
        const rowsAfterDelete = rows.filter(row => row.id !== rowDeleted);
        setRows(rowsAfterDelete)
    }

    function deleteRows(){
        fetch(`/workouts/${rows.id}`, {
            method: "DELETE",
        }).then(updateRows(rows.id))
    }
    return(
        <div className="main-container">
            <h1>Tracker</h1>
            <MyCalendar setDate={setDate}/>
            <div id="table"> 
                {user ? 
                <TrackerTable deleteRows={deleteRows}
                rows={rows.filter((row) => {
                    // console.log("date:", date)
                    // console.log("using dayjs:", dayjs(new Date(row.created_at)))
                    // console.log(date === dayjs(new Date(row.created_at)))
                    const dayjsdate = dayjs(new Date(row.created_at))
                    return dayjsdate['$d'].toString().substring(0,15) === date
                    // debugger
                    // return dayjs(row.created_at) === date
                })}
                handleAddExercise={handleAddExercise} date={date} 
                />
                : <h1>Please Log In</h1>}
            </div>
        </div>
    )
}

export default Tracker;