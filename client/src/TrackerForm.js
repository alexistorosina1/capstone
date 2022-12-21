
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const initialForm ={
    exercise_completed: "",
    sets: "",
    reps: "",
    time: "",
}


function TrackerForm({handleAddExercise, date}){

    const [open, setOpen] = useState(false);
    const [logExercise, setLogExercise] = useState(initialForm)
    const [errors, setErrors] = useState(null);

    function handleClickOpen (){
        setOpen(true);
    }

    function handleSave (){
        //add backend here
        fetch("/logexercise", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logExercise),
        }) .then((r) => {
            if (r.ok) {
                r.json().then((log) => {
                    handleAddExercise(log)
                    setErrors(null)
                })
            } else {
                r.json().then((errors => setErrors(errors)))
            }
        })
        handleAddExercise({...logExercise, date});
        handleClose();
    }

    function handleChange(e){
        const key = e.target.id;
        const value = e.target.value;
        setLogExercise({
            ...logExercise,
            [key]: value,
        });
    }

    function handleClose() {
        setLogExercise(initialForm);
        setOpen(false);
    }

    return (
        <div className="tracker-form">
            <IconButton onClick={handleClickOpen} aria-label="delete">
                <AddCircleIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter New Exercise</DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="exercise"
                    label="Exercise"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={logExercise.exercise}
                    onChange={handleChange}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="sets"
                    label="Sets"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={logExercise.sets}
                    onChange={handleChange}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="reps"
                    label="Reps per set"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={logExercise.reps}
                    onChange={handleChange}
                    />
                    <TextField
                    autoFocus
                    margin="dense"
                    id="time"
                    label="Time"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={logExercise.time}
                    onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    )

}


export default TrackerForm;