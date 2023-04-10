import React, { useState } from 'react'; 
import './DescriptionPhoto.css';

function CustomTextInput() {

 

  const [IsEditing, setIsEditing]=useState(false);
  return (
    <div className="description-right">
       {/* <button onClick={() => setIsEditing(true)}>  */}
        {/* <input type="text" value="Hey, you can add your comments here" onMouseDown={CustomTextInput}/> */}
          <textarea type="text" name="" id="comments" >
          Hey, you can add your comments here
          </textarea>
      
      {/* </button>  */}
    </div>
  );
}
export default  CustomTextInput;

  