import react, { useEffect, useState } from 'react';
// import { assets } from './Male/assets.svg'
import Biceps from './Biceps';

function Exercises(){
    const [allExercises, setAllExercises] = useState([]) 
    useEffect(() => {
        fetch("/exercises")
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => setAllExercises(data))
            }
        })
    }, []) 

    
    return(
        <div className="exercises">
            <img src={require("./Male/assets.svg").default} id="asset" />
            <Biceps allExercises={allExercises}/>
        </div>
    )
}


export default Exercises