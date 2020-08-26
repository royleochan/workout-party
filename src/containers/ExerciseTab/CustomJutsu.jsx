import React, { useState, useEffect } from 'react'
import {useJitsi} from "react-jutsu";


const TOOLBAR_BUTTONS = [
    'microphone',
    'camera',
    'fodeviceselection',
    'hangup',
    'chat',
    'etherpad',
    'settings',
    'videoquality',
    'filmstrip',
    'feedback',
    'shortcuts',
    // 'tileview',
    'download'
];

export const CustomJutsu = (props) => {
    const { domain, roomName, displayName, password, jwt = null, subject, options } = props
    const { loadingComponent, containerStyles, jitsiContainerStyles, onMeetingEnd } = props

    const [loading, setLoading] = useState(true)
    const jitsi = useJitsi({
        roomName,
        parentNode: 'jitsi-container',
        jwt: jwt,
        interfaceConfigOverwrite:{
            // filmStripOnly:true,
            TOOLBAR_BUTTONS,
            TOOLBAR_TIMEOUT: 1000,
            INITIAL_TOOLBAR_TIMEOUT: 2000,
            DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow Gymrat',
            SETTINGS_SECTIONS: [ 'devices', 'language', 'profile' ],
        },
    }, domain)

    const containerStyle = {
        width: '800px',
        height: '400px'
    }
    const jitsiContainerStyle = {
        display: loading ? 'none' : 'block',
        width: '100%',
        height: '100%'
    }

    useEffect(() => {
        if (jitsi) {
            setLoading(false)
            jitsi.executeCommand('subject', subject)

            jitsi.addEventListener('videoConferenceJoined', () => {
                if (password) jitsi.executeCommand('password', password)
                jitsi.executeCommand('displayName', displayName)
                // jitsi.executeCommand('tileViewChanged', { enabled: false})
            })

            jitsi.addEventListener('passwordRequired', () => {
                if (password) {
                    jitsi.executeCommand('password', password)
                }
            })

            jitsi.addEventListener('tileViewChanged', (res) => {
                if (!res.enabled) {
                    jitsi.executeCommand('toggleTileView');
                }
            })

            if (onMeetingEnd) jitsi.addEventListener('readyToClose', onMeetingEnd)
        }

        return () => jitsi && jitsi.dispose()
    }, [jitsi])

    return (
        <div style={{ ...containerStyle, ...containerStyles }}>
            {loading && (loadingComponent || <p>Loading ...</p>)}
            <div
                id='jitsi-container'
                style={{ ...jitsiContainerStyle, ...jitsiContainerStyles }}
            />
        </div>
    )
}

