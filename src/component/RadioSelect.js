import React from 'react'
import {
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
} from '../../node_modules/@material-ui/core';

function RadioSelect({ title, name, value, handleChange, dataSet }) {
    return (
        <div>
            <FormLabel style={{ margin: '5px' }} component="legend">{title}</FormLabel>
            <RadioGroup style={{ flexDirection: 'row' }} aria-label={name} name={name} value={value} onChange={handleChange}>
                {
                    dataSet && dataSet.map((ele, i) => {
                        return (
                            <FormControlLabel key={i} value={ele} control={<Radio />} label={ele} />
                        )
                    })
                }
            </RadioGroup>
        </div>
    )
}

export default RadioSelect
