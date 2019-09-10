import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Input = (props) => {
  const {
    showLabel = true,
    withGroup = true,
    className,
    ...others
  } = props;

  let label = props.label || props.name;
  let iType = props.type || "text";
  let ariaLabelledby = `${iType}_id_${props.name}`;


  return (
    <div className={clsx({ 'form-group': withGroup, })}>
      {
        showLabel
          ?
          <label className="form-label" htmlFor={ariaLabelledby}>{label}</label>
          :
          null
      }

      {
        iType === 'textarea'
          ?
          <textarea id={ariaLabelledby} className={clsx("form-input", className)} {...others} />
          :
          <input type={iType} id={ariaLabelledby} className={clsx("form-input", className)} {...others} />
      }
    </div>
  );


};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  showLabel: PropTypes.bool,
  withGroup: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
