import React, { useRef, useState } from 'react'; 

function CustomTextInput(props) {

    
    
    const textInput = useRef(null);
  
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div className="description-right1">
        <input
          type="text"
        //   value= "Hey, you can add your comments here"
          ref={textInput}/>
        {/* <input
          type="button"
          value="Фокус на поле для ввода текста"
          onClick={handleClick}
        /> */}
      </div>
    );
  }
  export default  CustomTextInput;