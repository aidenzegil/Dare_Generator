import React from 'react'

const Popup = props => {
    return (
        <div className="PopupBox">
            <div className="Box">
                {props.content}
            </div>
        </div>
    );
  };
   
  export default Popup;
