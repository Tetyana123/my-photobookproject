import React, {useState} from 'react';

import './DescriptionPhoto.css';

// var inputeditable='<textarea contenteditable="true" type="text" name="" class="input">';

function CustomTextInput({ value, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="description">
      <button className="input-description" onClick={() => setIsEditing(true)}>
        {!isEditing && (
          <p className="description-text">{value || 'Hi, you can add your comments here!'}</p>
        )}
        {isEditing && (
          <textarea
            type="text"
            className="description-textarea"
            value={value || 'Hi, you can add your comments here!'}
            onBlur={() => setIsEditing(false)}
            onChange={(event) => onChange(event.target.value)}
          />
        )}
      </button>
    </div>
  );
}

export default CustomTextInput;

    
  
