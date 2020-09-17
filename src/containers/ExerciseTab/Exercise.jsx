import React, { useRef, useState } from "react";
import WorkoutVideo from "./video.png";
import { CustomJutsu } from "./CustomJutsu";
import { useHistory } from "react-router-dom";
import Countdown from "react-countdown";
import Countdown2 from "./Countdown2";

const Exercise = (props) => {
  const [time, setTime] = useState(Date.now() + 0);
  const history = useHistory();

  const handleSubmit = (e) => {
    setTime(
      Date.now() +
        (parseInt(e.target.min.value) * 60 + parseInt(e.target.sec.value)) *
          1000
    );
  };

  const Completionist = () => (
    <form onSubmit={handleSubmit}>
      <input
        class="input-box"
        name="min"
        type="number"
        placeholder="Minutes"
      ></input>
      :
      <input
        class="input-box"
        name="sec"
        type="number"
        placeholder="Seconds"
      ></input>
      <button
        type="submit"
        style={{
          backgroundColor: "#E2B254",
          color: "white",
          marginLeft: "10px",
        }}
      >
        START
      </button>
    </form>
  );

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      console.log(minutes);
      console.log(seconds);
      return <Countdown2 minutes={minutes} seconds={seconds} />;
    }
  };

  const clockRef = useRef();
  const handlePause = () => {
    clockRef.current.isPaused()
      ? clockRef.current.start()
      : clockRef.current.pause();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#575757",
      }}
    >
      <div style={{ height: 100 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <img src={WorkoutVideo} alt={"Workout Video"} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ padding: 10, color: "white" }}>TIMER</h3>
          <Countdown date={time} renderer={renderer} ref={clockRef} />
          <br></br>
          <button
            class="time-home"
            style={{
              marginLeft: "10%",
              backgroundColor: "#E2B254",
              color: "white",
            }}
            variant="contained"
            type="submit"
            onClick={handlePause}
          >
            PAUSE/RESUME
          </button>
          <br></br>
          <button
            class="time-home"
            style={{
              marginLeft: "10%",
              backgroundColor: "#E2B254",
              color: "white",
            }}
            variant="contained"
            type="submit"
            onClick={() => setTime(0)}
          >
            RESET
          </button>
        </div>
      </div>
      <div style={{ height: 100 }} />
      <CustomJutsu
        roomName={"Iron_heaven"}
        displayName={""}
        password={"heylo"}
        loadingComponent={<p>Racking up the weights</p>}
        containerStyles={{ width: "100%", height: "800px" }}
        onMeetingEnd={() => history.push("/victory")}
      />
    </div>
  );
};

export default Exercise;
