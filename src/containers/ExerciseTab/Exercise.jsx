import React, { useEffect, useRef, useState } from "react";
import { CustomJutsu } from "./CustomJutsu";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { Auth } from "aws-amplify";
import Reactpip from 'react-picture-in-picture'
import './video.css';
import { Storage } from "aws-amplify";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

const Exercise = (props) => {
  const [username, setUsername] = useState("");
  const history = useHistory();
  const jitsiState = useSelector((state) => state.jitsi);
  const hasRoom = jitsiState.roomName != "" && jitsiState.video != "";
  const[active, setActive] = useState(false);
  const [video, setVideo] = useState("");
  
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: 'orange',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: '#A0A0A0',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

    useEffect(()=> {
        Auth.currentUserInfo().then(userInfo => setUsername(userInfo.attributes.name)) ;
        Storage.get(jitsiState.video, { level: 'public' }).then(url => setVideo(url.toString()))
    },[])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#081018",
        minHeight: "100vh"
      }}
    >
      {hasRoom ? (
        <>
          <h3
            style={{
              float:"right",
              textAlign:"right",
              position :"relative",
              top:"50px",
              right:"50px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "30px",
              color: "white",
            }}
          >
            Room ID : {jitsiState.roomName}
          </h3>
          <Reactpip isActive= {active} className="video">
          { video != "" &&
          <source src={video}/>
          }
        </Reactpip>

        <div style={{alignSelf:"center"}}>
        <FormControlLabel
        style={{color:"white",fontSize:"3vh",marginTop:"20px"}}
        control={
          <IOSSwitch
            checked={active}
            onChange={() => setActive(!active)}
            name="checkedB"
            color="primary"
          />
        }
        label={<Typography style={{fontSize:"20px"}}>Toggle Picture in Picture</Typography>}
      />
      </div>
        

          <div style={{ height: 20 }} />
          <CustomJutsu
            roomName={jitsiState.roomName}
            displayName={username}
            password={jitsiState.roomName}
            loadingComponent={<p>Racking up the weights</p>}
            containerStyles={{ width: "100%", height: "800px" }}
            onMeetingEnd={() => {
              window.location.href = "/victory"}}
          />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            height: "90vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "40px",
              color: "white",
            }}
          >
            No workout has been selected.
          </p>
          <button
            className="time-home"
            style={{
              marginRight: "5%",
              marginLeft: "5%",
              backgroundColor: "#E2B254",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "20px",
              borderRadius: "30px",
              display: "flex",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "40px",
              alignItems: "center"
            }}
            variant="contained"
            type="submit"
            onClick={() => {
              history.push("/workouts");
            }}
          >
            Click here to choose a workout!
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;
