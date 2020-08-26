import React, {useEffect} from "react";
import {useJitsi} from "react-jutsu";

const VideoConference = (props) => {
    const roomName = 'konoha'
    const parentNode = 'jitsi-container'
    const jitsi = useJitsi({ roomName, parentNode })

    useEffect(() => {
        if (jitsi) {
            jitsi.addEventListener('videoConferenceJoined', () => {
                jitsi.executeCommand('displayName', 'Naruto Uzumaki')
            })
        }
        return () => jitsi && jitsi.dispose()
    }, [jitsi])

    return <div id={parentNode} style={{height:700}}/>
}

const Exercise = (props) => {
    return(
        <VideoConference />
    )
};

export default Exercise;
