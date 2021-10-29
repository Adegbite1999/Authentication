import React from 'react';
import './input.css';
export function TextArea({
    type,
    name,
    value,
    onChange,
    placeholder,
    label,
    className
}) {
    return (
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} type={type} className={className} value={value} onChange={onChange} placeholder={placeholder} />
        </React.Fragment>
    )
}

export default TextArea;