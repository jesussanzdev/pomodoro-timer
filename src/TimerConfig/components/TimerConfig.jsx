import React, {Fragment, Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faMinusCircle, faPlusCircle);

class TimerConfig extends Component {

    render() {
        return (
            <Fragment>
                <div className="set-timer" >
                    <h2 className="mx-auto">SET TIMER</h2>
                </div>
                <div className="row set-timer">
                
                    <div className="col-sm-3">
                        <label htmlFor="sessionID">Session Length</label>                
                    </div>
                    <div className="col-sm-1">
                        <button className="btn-level" onClick={this.props.decrementTimer}> 
                            <FontAwesomeIcon icon="minus-circle" />
                        </button>
                    </div>
                    <div className="col-sm-1">
                        <div className="d-inline" id="sessionID">{this.props.baseTime.get('minutes')}</div>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn-level" onClick={this.props.incrementTimer}>
                                <FontAwesomeIcon icon="plus-circle" />
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="breakID">Break Length</label>                
                    </div>
                    <div className="col-sm-1">
                        <button className="btn-level" onClick={this.props.decrementBreak}> 
                            <FontAwesomeIcon icon="minus-circle" />
                        </button>
                    </div>
                    <div className="col-sm-1">
                        <div className="d-inline" id="breakID">{this.props.breakLength}</div>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn-level" onClick={this.props.incrementBreak}>
                            <FontAwesomeIcon icon="plus-circle" />
                        </button>
                    </div>
                </div>
                <div className="row set-timer">
                    <div className="developer mx-auto"> Designed and Coded by <br />
                    <a href="https://github.com/jesussanzdev"> 
                        Jesús Sanz
                    </a>
                </div>
            </div>         

            </Fragment>
        )
    }
} 
   
export default TimerConfig;