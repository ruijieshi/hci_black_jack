import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Popup from "reactjs-popup";
import React, {Fragment, useState} from 'react';
import YouTube from 'react-youtube';
import Instruction from './Instruction.js'

class Welcome extends React.Component {

    
    

    render(){
      

    return (
        <section className='welcome'>
                <h1>welcome to our black jack game!</h1>
                <h2> Your start money: 5000 </h2>
                
                
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
                
                                window.location.href = 'https://young-meadow-56001.herokuapp.com/instruction'

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
              
        </section>
    );
  }
};
export default Welcome;
