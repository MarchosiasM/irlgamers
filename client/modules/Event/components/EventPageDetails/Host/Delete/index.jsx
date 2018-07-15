import React from 'react';

/* eslint-disable react/prop-types */
const DeleteButton = ({ deleteMode, deleteConfirm, deleteToggle }) => (
  <div>
    {
      deleteMode
        ?
        <div>
          "Delete, are you sure?"
          <a className="waves-effect waves-light btn" onClick={deleteConfirm()}>
            I'm sure
          </a>
          <a className="waves-effect waves-light btn" onClick={deleteToggle()} >
            Nevermind
          </a>
        </div>
        :
        <a
          className="waves-effect waves-light btn"
          onClick={deleteToggle()}
        >
          Delete
        </a>
    }
  </div>
);

export default DeleteButton;
