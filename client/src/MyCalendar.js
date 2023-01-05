import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker} from "@mui/x-date-pickers/StaticDatePicker";
import { useEffect, useState } from "react";


function MyCalendar({setDate}){
    const [value, setValue] = useState(dayjs(new Date()));
    
    useEffect(() => {
        setDate(value.toDate().toDateString());
    },[])

    return(
        <div style={{
            margin: "auto",
            height:"350px",
            width:"640px",
            top:"50px",
            left:"50px",
            borderRadius: "30px"
        }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
                setDate(newValue.toDate().toDateString());
            }}
            renderInput={(params) => <TextField {...params}/>}
            />
        </LocalizationProvider>
        </div>
    )
}


export default MyCalendar;