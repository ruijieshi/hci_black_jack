import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Popup from "reactjs-popup";
import React, {Fragment, useState} from 'react';
import YouTube from 'react-youtube';

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showVideo: false
        }
        this.startShowVideo = this.startShowVideo.bind(this);
    }

    startShowVideo(e){

      console.log(19)
      this.setState({
        showVideo: !this.state.showVideo
      })
    }

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
        <section className='welcome'>
                <h1>welcome to our black jack game!</h1>
                <h2> Your start money: 5000 </h2>
                {
                  this.state.showVideo

                  ?

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

                :
                <div>
                <Popup trigger={<button className="button"> start </button>} modal>
                        {close => (
                         <div className="modal">
                           <a className="close" onClick={close}>
                             &times;
                           </a>
                           <div className="header"> Welcome </div>
                           <div className="content">
                             {" "}
                             Have you play this game before? Do you want to learn how to play?
                           </div>
                           <div className="actions">
                             <button className="button" onClick={()=>{
                               window.location.href = 'https://dry-beyond-45426.herokuapp.com/'
                             }}> Yes, I have played before. Take me to the game.</button>

                             <button className="button" onClick={()=>{
                                close()
                                this.startShowVideo()
                             }}>
                                No,take me to instruction.</button>

                             <button
                               className="button"
                               onClick={() => {
                                 console.log("modal closed ");
                                 close();
                               }}
                             >
                             close
                           </button>
                     </div>
                   </div>
                  )}
                  </Popup>

                </div>
              }
        </section>
    );
  }
};
export default Welcome;
