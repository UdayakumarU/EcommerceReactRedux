import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherPros }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherPros} />
    {label ? (
      <label
        className={`${otherPros.value.length > 0 ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;