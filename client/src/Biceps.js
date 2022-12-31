

function Biceps({allExercises}){
    console.log(allExercises)
    const vidStyle = {
        width: '20%',
        height: 'auto',
    }
    return(
        <div className="biceps">
            {allExercises.slice(0,2).map(bi => {
                return(
                    <>
                        <h3>{bi.name}</h3>
                        <video style={vidStyle}src={bi.video}></video>
                        <p>{bi.instructions}</p>
                    </>
                )
            })}
        </div>
    )
}


export default Biceps; 