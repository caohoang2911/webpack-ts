import { useState } from 'react'

export const useForm = (submitCallback) => {
    const [values, setstate] = useState();

    const handleChange = (event) => {//rules, regex, message, submited

        setstate((state) => ({
            ...state, [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitCallback();
    }

    return [values, handleChange, handleSubmit];
}
