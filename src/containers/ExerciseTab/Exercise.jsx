import React from "react";
import {Jutsu} from "react-jutsu";
import WorkoutVideo from "./video.png"

const Exercise = (props) => {
    return(
        <div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <img src={WorkoutVideo} alt={"Workout Video"} />
                <div>
                    <h1>TIMER</h1>
                    <p>16:00</p>

                    <button>Start / Stop</button>
                </div>
            </div>
            <div style={{height:100}}/>
            <Jutsu
                roomName={"Iron_heaven"}
                displayName={"MuscleMan6969"}
                loadingComponent={<p>Racking up the weights</p>}
                containerStyles={{ width: '100%', height: '400px' }}
                onMeetingEnd={() => console.log('Meeting has ended')}
            />
        </div>
    )
};



export default Exercise;
