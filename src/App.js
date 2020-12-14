// import logo from './logo.svg';

import './App.css';
import { emojiDB } from "./Emojidb.js";
import { useState} from "react";

//puting keys of object into an array


function App() {

  let emojiDbArray = Object.keys(emojiDB); 

  const [emojiMeanning, setEmojiMeanning] = useState("");

  function emojiMeanningHandeller(emoji){
    setEmojiMeanning(emojiDB[emoji]);
  }

  function inputMeanningHandeller(event){
    let inputEmoji = event.target.value;
    
    if (emojiDbArray.includes(inputEmoji)){
      setEmojiMeanning(emojiDB[inputEmoji]);
    }else if (inputEmoji === " "){
      setEmojiMeanning("Emoji Interpreter")
    }else {
      setEmojiMeanning("Sorry we can't help you")
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
                  onChange={inputMeanningHandeller}            
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
                                  onClick={()=>emojiMeanningHandeller(emoji)} 
                                  key={index}>
                                  {emoji}
                                  </li> //displaying all the keys from the array
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
