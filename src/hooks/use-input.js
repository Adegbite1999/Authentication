import { useState } from 'react'

const useInput = (validate) => {
    const [value, setValue] = useState('')
    const [isTouched, setTouched] = useState(false)

    const Valid = validate(value)
    const isInvalid = !Valid && isTouched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const blurHandler = () => {
        setTouched(true)
    }

    const resetFields = () => {
        setValue('')
        setTouched(false)
    }

    return {
        value,
        Valid,
        isInvalid,
        valueChangeHandler,
        blurHandler,
        resetFields
    }

}

export default useInput;
