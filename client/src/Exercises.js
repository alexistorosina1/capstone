import bicepSvg from "./Male/Bicep.svg";
import react, { useEffect, useState } from "react";
// import { assets } from './Male/assets.svg'
import Biceps from "./Biceps";

function Exercises() {
  const [allExercises, setAllExercises] = useState([]);
  useEffect(() => {
    fetch("/exercises").then((r) => {
      if (r.ok) {
        r.json().then((data) => setAllExercises(data));
      }
    });
  }, []);

  return (
    <div
      className="main-container"
      id="exercise-container"
      style={{
        height: "800px",
        width: "1000px",
        position: "absolute",
        
      }}
    >
      {/* <img
        src={bicepSvg}
        id="biceps"
        style={{
          height: "800px",
          width: "1000px",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 5,
        }}
      />
      <img
        src={require("./Male/assets.svg").default}
        id="asset"
        style={{
          height: "800px",
          width: "1000px",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      /> */}
      <Biceps allExercises={allExercises}/>
    </div>
  );
}

export default Exercises;
