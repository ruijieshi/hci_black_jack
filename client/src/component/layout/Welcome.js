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
                <Popup trigger={<button className="custom-button"> start </button>} modal>
                        {close => (
                         <div className="modal">
                           <a className="close" onClick={close}>
                             &times;
                           </a>
                             <div className="header"> <h2>Welcome</h2></div>
                           <div className="content">
                             {" "}
                               <h1> Have you play this game before? Do you want to learn how to play? </h1>
                           </div>
                           <div className="actions">
                             <button className="custom-button" onClick={()=>{
                               window.location.href = 'https://dry-beyond-45426.herokuapp.com/'
                             }}> Yes, I have played before. Take me to the game.</button>

                             <button className="custom-button" onClick={()=>{
                                close()
                
                                window.location.href = 'https://young-meadow-56001.herokuapp.com/instruction'

                             }}>
                                No,take me to instruction.</button>

                             <button
                               className="custom-button"
                               onClick={() => {
                                 console.log("modal closed ");
                                 close();
                               }}
                             >
                             Close
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
