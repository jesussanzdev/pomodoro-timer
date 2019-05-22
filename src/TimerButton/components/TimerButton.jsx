import React, { Fragment, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop, faPause } from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faStop, faPause);

class TimerButton extends Component {
    constructor(){
        super();

        this.getButton = this.getButton.bind(this);
    }

    getButton() {

            return(  
            <Fragment>
                <button disabled={!this.props.enablePlay} className="btn-media" onClick={this.props.startTimer}> 
                     <FontAwesomeIcon icon="play" />
                 </button>
                <button className="btn-media mx-auto" onClick={this.props.stopTimer}> 
                    <FontAwesomeIcon icon="stop" />
                </button>
                <button className="btn-media" onClick={this.props.pauseTimer}> 
                    <FontAwesomeIcon icon="pause" />
                </button>
            </Fragment>
            );
         
    }

   render() {
       return (
        <div className="media-container">
            {this.getButton()}
        </div>
       );
   };
}

export default TimerButton;