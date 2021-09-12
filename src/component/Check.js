import React from 'react'
import {
    FormControlLabel,
    Checkbox
} from '../../node_modules/@material-ui/core';

export default function Check({ name, value, handleChange }) {
    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={value} onChange={handleChange} name={name} />}
                label={name}
            />
        </div>
    )
}
