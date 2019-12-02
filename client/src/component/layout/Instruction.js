import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Popup from "reactjs-popup";
import React, {Fragment, useState} from 'react';
import YouTube from 'react-youtube';

class Instruction extends React.Component {

    

    render(){
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
      function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log("25")
      }

    return (
        
               
            <div>
              <YouTube
                videoId="-9YGKFdP6sY"
                opts={opts}
                onReady={_onReady}
              />
              <button className="button" onClick={()=>{
                 window.location.href = 'https://dry-beyond-45426.herokuapp.com/'
              }}>
                 Finish and Resdy to roll!</button>

            </div>

               
    );
  }
};
export default Instruction;
