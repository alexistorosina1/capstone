import bicepSvg from './Male/Bicep.svg';


function Biceps({ allExercises }) {
  console.log(allExercises);
  const vidStyle = {
    width: "100%",
    height: "auto",
  };

  const centerCard ={
    margin: "auto",
    width: "30%",
    display: "center",
  }
  return (
    <div style={centerCard} class="flex flex-col space-y-4 ...">
        <svg src={bicepSvg} id="biceps"/> 
      {allExercises.slice(0, 2).map((bi) => {
          return (
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <video class="w-full" controls width="100%" style={vidStyle}>
              <source src={bi.video} type="video/mp4"/>
            </video>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{bi.name}</div>
              <p class="text-gray-700 text-base">{bi.instructions}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #biceps
              </span>
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
