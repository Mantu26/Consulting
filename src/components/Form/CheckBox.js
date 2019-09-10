import React from "react";

//Deps
import clsx from 'clsx';


const CheckBox = (props) => {
    const {
        inline = true,
        showLabel = true,
        withGroup = true,
        options = [],
        selectedValues = {},
        className,
        ...others
    } = props;

    let label = props.label || props.name;


    return (
        <div className={clsx({ 'form-group': withGroup, })}>
            {showLabel ? <label className="form-label">{label}</label> : null}

            <div style={{ display: `flex`, flexFlow: `${inline ? 'row' : 'column'} wrap` }}>
                {options.map((opt, i) => {
                    let ariaLabelledby = `checkbox_id_${props.name}_${i}_${opt.value}`;
                    return (
                        <div key={ariaLabelledby} style={{ margin: 4, display: `inline-flex`, flexFlow: `row wrap`, alignItems: `center` }}>
                            <input
                                value={opt.value}
                                type="checkbox"
                                checked={selectedValues && selectedValues[opt.value] === true}
                                className={clsx("form-check", className)}
                                id={ariaLabelledby}
                                {...others}
                            />
                            <label className="form-check-label" htmlFor={ariaLabelledby}>{opt.label}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/*CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    inline: PropTypes.bool,
    showLabel: PropTypes.bool,
    withGroup: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.string, value: PropTypes.string })).isRequired,
    selectedValues: PropTypes.object,
    className: PropTypes.string,
};*/


export default CheckBox;

/*const clnForm = { ...formState };
      let tmpVals;
      if (clnForm[el.name]) {
        tmpVals = { ...clnForm[el.name], [`${el.value}`]: el.checked, };
      } else {
        clnForm[el.name] = {};
        tmpVals = { ...clnForm[el.name], [`${el.value}`]: el.checked, };
      }

      vals = { ...formState, [`${el.name}`]: tmpVals, };
    } else {
      vals = { ...formState, [`${el.name}`]: el.value, };
    }

    setFormState(vals);
  }*/
