import React from 'react';

/* eslint-disable react/prop-types */
const FormErrors = ({ formErrors }) => (
  <div className="form-errors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>{formErrors[fieldName]}</p>
        );
      }
      return '';
    })}
  </div>
);

export default FormErrors;
