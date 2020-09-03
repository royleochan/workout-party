import React from "react";
import WorkoutVideo from "./video.png"
import {CustomJutsu} from "./CustomJutsu";
import {useHistory} from "react-router-dom";

const Exercise = (props) => {
  const history = useHistory();
    return(
        <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
            <div style={{height:100}}/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <img src={WorkoutVideo} alt={"Workout Video"} />
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <h3>TIMER</h3>
                    <h1>16:00</h1>

                    <button>Start / Stop</button>
                </div>
            </div>
            <div style={{height:100}}/>
            <CustomJutsu
                roomName={"Iron_heaven"}
                displayName={""}
                password={"heylo"}
                loadingComponent={<p>Racking up the weights</p>}
                containerStyles={{ width: '100%', height: '800px'}}
                onMeetingEnd={() => history.push('/victory')}
            />
        </div>
    )
};



export default Exercise;
