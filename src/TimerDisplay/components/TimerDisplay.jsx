import React from 'react';
import * as timerStates from '../../timerStates';
import beepSound from '../../media/BeepSound.wav';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;

    return `${val}`;
}

const TimerDisplay = (props) => (
    <div>
        <div className="row mx-auto">
            {
                (props.timerState === timerStates.BREAK)
                && <audio id="alarm" src={beepSound} type="audio/mp3" autoPlay/> 
            }
            {
                (props.timerState === timerStates.RUNNING)
                && <audio id="alarm" src={beepSound} type="audio/mp3" autoPlay/>      
            }     
        </div>
        <div className="timer" style={props.alarmColor}>
            <div className="timer-wrapper">
                <div className="timer-label">
                    {props.timerType}
                </div> 
                <div className="time-counter">
                    {`${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
                </div>      
            </div>      
        </div>
    </div>
);

export default TimerDisplay;