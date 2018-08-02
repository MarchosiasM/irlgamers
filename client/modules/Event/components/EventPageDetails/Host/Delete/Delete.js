import React from 'react';

//CustomCSS
let buttonpad = {
  margin: 5 
}

/* eslint-disable react/prop-types */
const DeleteButton = ({ deleteMode, deleteConfirm, deleteToggle }) => (
  <span>
    {
      deleteMode
        ?
        <div>
            Delete, are you sure?
          <a className="waves-effect waves-light btn" style={buttonpad} onClick={deleteConfirm()}>
            I'm sure
          </a>
          <a className="waves-effect waves-light btn" style={buttonpad} onClick={deleteToggle()} >
            Nevermind
          </a>
        </div>
        :
        <a
          className="waves-effect waves-light btn"
          onClick={deleteToggle()}
          style={buttonpad}
        >
          Delete
        </a>
    }
  </span>
);

export default DeleteButton;
