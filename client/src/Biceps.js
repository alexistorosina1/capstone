import bicepSvg from "./Male/Bicep.svg";

function Biceps({ allExercises }) {
  console.log(allExercises);
  const vidStyle = {
    width: "100%",
    height: "auto",
  };

  const centerCard = {
    margin: "auto",
    width: "30%",
    display: "center",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    width: "80vw",
    justifyContent: "center",
    gap: "40px",
  };
  return (
    <div style={centerCard}>
      {/* <svg src={bicepSvg} id="biceps"/>  */}
      {allExercises.map((bi) => {
        return (
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <video class="w-full" controls width="100%" style={vidStyle}>
              <source src={bi.video} type="video/mp4" />
            </video>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{bi.name}</div>
              <p class="text-white-700 text-base">{bi.instructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
  // <>
  //     <h3>{bi.name}</h3>
  //     <video class="w-full" controls width="100%" style={vidStyle}>
  //         <source src={bi.video} type="video/mp4"/>
  //     </video>
  //     <p>{bi.instructions}</p>
  // </>
}

export default Biceps;
