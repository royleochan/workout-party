import React, { useEffect, useRef, useState } from "react";
import WorkoutVideo from "./video.png";
import { CustomJutsu } from "./CustomJutsu";
import { useHistory } from "react-router-dom";
import Countdown from "react-countdown";
import Countdown2 from "./Countdown2";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useDispatch, useSelector } from "react-redux";

const Exercise = (props) => {
  const [time, setTime] = useState(Date.now() + 0);
  const history = useHistory();
  const jitsiState = useSelector((state) => state.jitsi);
  const hasRoom = jitsiState.roomName != "" && jitsiState.videoLink != "";

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
          backgroundColor: "transparent",
          color: "white",
          marginLeft: "10px",
        }}
      >
        <PlayArrowIcon />
      </button>
    </form>
  );

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
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
        backgroundColor: "#081018",
      }}
    >
      {hasRoom ? (
        <>
          <div style={{ height: 100 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <iframe
              width="560"
              height="315"
              src={jitsiState.video}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "Impact",
                  fontSize: "40px",
                  padding: 10,
                  color: "white",
                }}
              >
                Timer
              </h3>
              <Countdown
                date={time}
                renderer={renderer}
                ref={clockRef}
                autoStart={true}
              />
              <br></br>
              <button
                className="time-home"
                style={{
                  marginRight: "5%",
                  marginLeft: "5%",
                  backgroundColor: "#E2B254",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "arial",
                  fontSize: "20px",
                  borderRadius: "30px",
                }}
                variant="contained"
                type="submit"
                onClick={handlePause}
              >
                Pause / Resume
              </button>
              <br></br>
              <button
                className="time-home"
                style={{
                  marginRight: "5%",
                  marginLeft: "5%",
                  backgroundColor: "#E2B254",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "arial",
                  fontSize: "20px",
                  borderRadius: "30px",
                }}
                variant="contained"
                type="submit"
                onClick={() => setTime(0)}
              >
                Reset
              </button>
            </div>
          </div>
          <div style={{ height: 50 }} />
          <h3
            style={{
              fontFamily: "Impact",
              fontSize: "40px",
              padding: 10,
              color: "white",
            }}
          >
            Room ID : {jitsiState.roomName}
          </h3>
          <div style={{ height: 50 }} />
          <CustomJutsu
            roomName={jitsiState.roomName}
            displayName={""}
            password={jitsiState.roomName}
            loadingComponent={<p>Racking up the weights</p>}
            containerStyles={{ width: "100%", height: "800px" }}
            onMeetingEnd={() => history.push("/victory")}
          />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            height: "90vh",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "Impact",
              fontSize: "40px",
              padding: 10,
              color: "white",
            }}
          >
            Workout not selected yet
          </h3>
          <button
            className="time-home"
            style={{
              marginRight: "5%",
              marginLeft: "5%",
              backgroundColor: "#E2B254",
              color: "white",
              fontWeight: "bold",
              fontFamily: "arial",
              fontSize: "20px",
              borderRadius: "30px",
            }}
            variant="contained"
            type="submit"
            onClick={() => {
              history.push("/workouts");
            }}
          >
            Click here to choose workout!
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;
