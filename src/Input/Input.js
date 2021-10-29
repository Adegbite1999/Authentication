import React from 'react';
// import PropTypes from 'prop-types'
import './input.css'

function FormInput({
    label,
    type,
    value,
    onChange,
    className,
    placeholder,
    children,
    name,
    ...props
}) {
    return (
        <React.Fragment>
            <label htmlFor={name} >{label}</label>
            <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            />
        </React.Fragment>
    )
}

// FormInput.defaultProps = {
//     type: "text",
//     className:''
// }


// FormInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string,
//     placeholder: PropTypes.string.isRequired,
//     type: PropTypes.oneOf(['text', 'number', 'password']),
//     className: PropTypes.string,
//     value:PropTypes.any,
//     onChange: PropTypes.func.isRequired
// }

export default FormInput;


