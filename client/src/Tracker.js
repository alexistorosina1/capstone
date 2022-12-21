import { useEffect, useState } from "react";
import MyCalendar from "./MyCalendar";
import TrackerTable from "./TrackerTable";


function Tracker({user}){
    const [rows, setRows] = useState({});
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
    return(
        <div className="tracker">
            <h1>Tracker</h1>
            <MyCalendar setDate={setDate}/>
            <div id="table"> 
                {user ? 
                <TrackerTable rows={rows.filter((row) => row.date === date)} handleAddExercise={handleAddExercise} date={date} />
                : <h1>Please Log In</h1>}
            </div>
        </div>
    )
}

export default Tracker;