import React, { useState } from 'react'
import {
    TextField,
    FormLabel
} from '../../node_modules/@material-ui/core';

function Text({ title, name, value, handleChange }) {
    return (
        <div>
            <FormLabel  style={{ margin: '10px' }} component="legend">{title}</FormLabel>
            <TextField size="small" placeholder="Fill the answer" name={name} value={value} onChange={(e) => handleChange(e)} variant="outlined" />
        </div>
    )
}

export default Text
