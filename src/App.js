// import logo from './logo.svg';

import './App.css';
import { emojiDB } from "./Emojidb.js";
import { useState} from "react";

//puting keys of object into an array


function App() {

  let emojiDbArray = Object.keys(emojiDB); 

  const [emojiMeanning, setEmojiMeanning] = useState("Emoji interpreter"); // state before interact

  function emojiMeanningHandeller(emoji){ //what happens after interact

    setEmojiMeanning(emojiDB[emoji]); // state after interact
  }

  function inputMeanningHandeller(event){ // what happens after  interact
    let inputEmoji = event.target.value;
    
    if (emojiDbArray.includes(inputEmoji)){
      setEmojiMeanning(emojiDB[inputEmoji]); // state after interact
    }else if (inputEmoji === ""){
      setEmojiMeanning("Emoji Interpreter")
    }else {
      setEmojiMeanning("sorry 😔 can't interpret this")
    }
    
  }

  return (
    <div className="App">

      <div className="container-main">
          <div className="container-form">
            <div className="div-form">
                <input
                  className="input-form "
                  placeholder= "Enter your emoji here "
                  onChange={inputMeanningHandeller}     //interact       
                />
                <div>
                  <h2> {emojiMeanning}</h2>
                </div>
             </div>   
            <div className="form-title">
              <h1>inside</h1>
            </div>
          </div>
          <div className="container-emoji">
          <div className="emoji-title">
              <div  className="div-title">
                   <h1>outt.</h1>
              </div>           
              <div>
                  <ul>              
                      {
                        emojiDbArray.map((emoji,index)=>{
                          return <li
                                  onClick={()=>emojiMeanningHandeller(emoji)} //interact
                                  key={index}>
                                  {emoji}
                                  </li> //view
                        })
                      }        
                  </ul> 
                </div>
            </div>
            <div className="div-form">
            
            </div>
          
          </div>
      </div>

     

    </div>
  );
}

export default App;
