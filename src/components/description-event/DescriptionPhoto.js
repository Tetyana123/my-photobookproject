import React, { useState } from 'react'; 

import './DescriptionPhoto.css';

// var inputeditable='<textarea contenteditable="true" type="text" name="" class="input">';

function CustomTextInput() {

  const [IsEditing, setIsEditing]=useState(false);
  return (
    <div className="description">
       <button className="input-description" onClick={() => setIsEditing(true)}> 
        
        {/* <input type="text" value="Hey, you can add your comments here" onMouseDown={CustomTextInput}/> */}
        {/* <p class="inputeditable" name="foo">
           Hey, you can add your comments here!
        </p> */}
          
          
          <textarea type="text" name="" id="comments" >
          Hi, you can add your comments here!
          </textarea>
      
      </button> 
    </div>
  );
}
export default  CustomTextInput;

    
  
  