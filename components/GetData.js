import React from 'react'
import FormDaisy from './DaisyUI/InputText/FormDaisy'
// import LabelDaisy from '/DaisyUI/InputText/LabelDaisy';
import LabelDaisy from './DaisyUI/InputText/LabelDaisy'
const GetData = ({clName, label, submitAction, setLocation, onChangeAction }) => {
  return (
    <div className={clName}>
        <LabelDaisy
          label={label}>
        </LabelDaisy>

        <FormDaisy
          clName={'xl:flex xl:justify-center xl:flex-col xl:gap-5'}
          onChangeAction={onChangeAction}
          submitAction={submitAction}>
        </FormDaisy>
        
    </div>
  )
}

export default GetData