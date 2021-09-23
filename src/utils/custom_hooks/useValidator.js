import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

function useValidator({ value, rules, submited }) {

    const [error, setError] = useState(false);
    useEffect(() => {
        this.rules.forEach((rule) => {

        })
    }, [submited])

    return [error ? message : ''];
}

useValidator.propTypes = {
    value: PropTypes.any,
    rules: PropTypes.array,
    submited: PropTypes.bool
}

export default useValidator

