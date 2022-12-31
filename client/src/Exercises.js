import react, { useEffect, useState } from 'react';
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
            <Biceps allExercises={allExercises}/>
        </div>
    )
}


export default Exercises