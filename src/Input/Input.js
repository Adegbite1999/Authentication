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
    onBlur,
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
                onBlur={onBlur}
            />
        </React.Fragment>
    )
}


export default FormInput;


