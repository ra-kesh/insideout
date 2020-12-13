// import logo from './logo.svg';

import './App.css';
import { emojiDB } from "./Emojidb.js";
import { useState} from "react";

//puting keys of object into an array


function App() {

  let emojiDbArray = Object.keys(emojiDB); 

  const [emojiMeanning, setEmojiMeanning] = useState("animal planet");

  function emojiMeanningHandeller(emoji){
    setEmojiMeanning(emojiDB[emoji]);
  }

  function inputMeanningHandeller(event){
    let inputEmoji = event.target.value;
    
    if (emojiDbArray.includes(inputEmoji)){
      setEmojiMeanning(emojiDB[inputEmoji]);
    }else if (inputEmoji === " "){
      setEmojiMeanning("animal planet")
    }else {
      setEmojiMeanning("we don't know this animal")
    }
    
  }

  return (
    <div className="App">
        <div>
          <h1>inside out</h1>
          <input onChange={inputMeanningHandeller}/>
          <h2>{emojiMeanning}</h2>
           <ul>
              
                {
                  emojiDbArray.map((emoji,index)=>{
                    return <li
                            onClick={()=>emojiMeanningHandeller(emoji)} 
                            key={index}>
                            {emoji}</li> //displaying all the keys from the array
                  })
                }
             
           </ul> 
        </div>

     

    </div>
  );
}

export default App;
