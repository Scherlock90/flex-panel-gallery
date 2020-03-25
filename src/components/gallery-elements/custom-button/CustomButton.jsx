import React from 'react'
import Button from '@material-ui/core/Button';

export const CustomButton = ({ variant, color, onClick, name }) =>
    <Button {...{variant, color, onClick }}>{ name }</Button>
