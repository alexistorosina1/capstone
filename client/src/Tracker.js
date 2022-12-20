import { useState } from "react";
import TrackerTable from "./TrackerTable";


function Tracker(){
    const [rows, setRows] = useState([]);
    const [date, setDate] = useState(new Date().toDateString());

    const handleAddExercise = (exercise) => {
        const newRows = [exercise, ...rows]
        setRows(newRows)
    }
    return(
        <div className="tracker">
            <h1>Tracker</h1>
            <div className="table">
                <TrackerTable rows={rows.filter((row) => row.date === date)} handleAddExercise={handleAddExercise} date={date}/>
            </div>
        </div>
    )
}

export default Tracker;