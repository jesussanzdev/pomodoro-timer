import React, {Component} from 'react';
import moment from 'moment';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerButton from '../../TimerButton/components/TimerButton';
import TimerConfig from '../../TimerConfig/components/TimerConfig';
import * as timerStates from '../../timerStates';


class Timer extends Component {
    constructor(){
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
            breakLength: 4,
            currentBreakLength: 4,
            timerState: timerStates.NOT_SET,
            timerType: "SESSION",
            enablePlay: true,
            timer: null,
            alarmColor: {color: 'rgb(238, 231, 238)'}
        };

        this.setBaseTime = this.setBaseTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.reduceTimer = this.reduceTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.completeTimer = this.completeTimer.bind(this);
        this.decrementTimer = this.decrementTimer.bind(this);
        this.incrementTimer = this.incrementTimer.bind(this);
        this.decrementBreak = this.decrementBreak.bind(this);
        this.incrementBreak = this.incrementBreak.bind(this);
    }

    setBaseTime(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime,
        });
    }

    setBreakLength(newBreakLength) {
        this.setState({
            breakLength: newBreakLength,
            currentBreakLength: newBreakLength,
        });
    }

    startTimer(){

        if(this.state.timerState === timerStates.BREAK){
            this.setState({
                currentTime: moment.duration(this.state.currentBreakLength, 'minutes'),
                timerType: "BREAK",
                timerState: null,
                timer: setInterval(this.reduceTimer, 1000),
                enablePlay: false
            })
        }
        //Session time
        else{
            this.setState({
                timerState: timerStates.RUNNING,
                timerType: "SESSION",
                timer: setInterval(this.reduceTimer, 1000),
                enablePlay: false
            })
        }
    }

    stopTimer(){
        //If clock is working (the timer is set) and has any value restart it
        if (this.state.timer){
            clearInterval((this.state.timer))
        }
        //Not set mode
        this.setState({
            timerState: timerStates.NOT_SET,
            timer: null,
            timerType: "SESSION",
            alarmColor: {color: 'rgb(238, 231, 238)'},
            currentTime: moment.duration(this.state.baseTime),
            enablePlay: true
        });
    }

    pauseTimer(){
           //If clock is working (the timer is set) and has any value restart it
        if (this.state.timer){
            clearInterval((this.state.timer))
        }
        //Not set mode
        this.setState({
            timer: null,
            enablePlay: true
        });
    }

    reduceTimer(){
      if (this.state.currentTime.get('minutes') === 0
               && this.state.currentTime.get('seconds') === 0) {
            this.completeTimer();
            return;
        } 

      const newTime = moment.duration(this.state.currentTime);
      newTime.subtract(1, 'seconds');
      this.warning(newTime);

      this.setState({
          currentTime: newTime
      });
    }

    completeTimer() {
     //If clock is working (the timer is set) and has any value restart it
        if (this.state.timer){
            clearInterval((this.state.timer))
        }
     //If clock has finished session mode, change the state to break mode and start the timer
        if(this.state.timerState === timerStates.RUNNING){
            this.setState({
                timerState: timerStates.BREAK,
                timer: null,
            })
            this.startTimer();
        }
        else{
        //If clock has finished break mode, change the state to session mode and restart the timer
            this.setState({
                currentTime: moment.duration(this.state.baseTime, 'minutes'),
                timerState: timerStates.RUNNING,
                timer: null,
            })
            this.startTimer();
        }
    }

    decrementTimer() {
        let newBaseTime = this.state.baseTime;

        if (newBaseTime.get('minutes') > 1){
            newBaseTime.subtract(1, 'minutes')
            this.setBaseTime(newBaseTime);
        }else if (newBaseTime.get('minutes') === 1){
            newBaseTime.add(parseInt(58, 10), 'minutes');
            this.setBaseTime(newBaseTime);
        }
    }

    incrementTimer() {
        let newBaseTime = this.state.baseTime;

        if (newBaseTime.get('minutes') === 59){
            newBaseTime.add(parseInt(1, 10), 'minutes');
        }
        newBaseTime.add(parseInt(1, 10), 'minutes');

        this.setBaseTime(newBaseTime);
    }

    decrementBreak() {
        let newBreakLength = this.state.breakLength;

        if (newBreakLength > 1){
            newBreakLength -= 1;
            this.setBreakLength(newBreakLength);
        }else if (newBreakLength === 1){
            newBreakLength = 9;
            this.setBreakLength(newBreakLength);
        }
    }

    incrementBreak() {
        let newBreakLength = this.state.breakLength;

        if (newBreakLength < 9){
            newBreakLength += 1;
            this.setBreakLength(newBreakLength);
        }
        else if(newBreakLength === 9){
            newBreakLength = 1;
            this.setBreakLength(newBreakLength);
        }
    }

    warning(_timer) {
        _timer.get('minutes') < 1 ? this.setState({alarmColor: {color: 'rgb(255, 150, 150) '}}) : this.setState({alarmColor: {color: 'rgb(238, 231, 238)'}});
    }

    render()
    {
        return (
        <div className="container-fluid">
            <TimerDisplay 
                currentTime={this.state.currentTime}
                timerState={this.state.timerState}
                timerType={this.state.timerType}
                alarmColor={this.state.alarmColor}

            />
            <TimerButton
                enablePlay={this.state.enablePlay}
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                pauseTimer={this.pauseTimer}
                timerState={this.state.timerState}/>
            {
                //If the timerState is NOT_SET the timerConfig is evaluated
                (this.state.timerState === timerStates.NOT_SET)
                &&
                (<TimerConfig 
                baseTime={this.state.baseTime}
                breakLength={this.state.breakLength}
                decrementTimer={this.decrementTimer}
                incrementTimer={this.incrementTimer}
                decrementBreak={this.decrementBreak}
                incrementBreak={this.incrementBreak}

                />)
            }  
        </div>
        );    
    }
}


export default Timer;