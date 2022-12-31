

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
                        <video controls width="100%" style={vidStyle}>
                            <source src={bi.video} type="video/mp4"/>
                        </video>
                        <p>{bi.instructions}</p>
                    </>
                )
            })}
        </div>
    )
}


export default Biceps; 