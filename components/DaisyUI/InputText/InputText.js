import React from 'react'
import FormDaisy from './FormDaisy';
import LabelDaisy from './LabelDaisy';
import Label from './LabelDaisy';

const InputText = ({onChangeAction, type, placeholder, clName }) => {
  return (
    <input  onChange={onChangeAction} type={type} placeholder={placeholder} className={clName} />
  )
}

export default InputText