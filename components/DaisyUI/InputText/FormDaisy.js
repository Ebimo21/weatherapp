import React from 'react'
import InputText from './InputText'

const FormDaisy = ({submitAction, clName, onChangeAction}) => {
  return (
    // <div>FormDaisy</div>
    <form onSubmit={submitAction} className={clName}>
        <InputText
          onChangeAction={onChangeAction}
          type={`text`}
          placeholder={`Type here`}
          clName={`input input-bordered w-full max-w-xs`}>
        </InputText>
        <button  type={`submit`} value="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Search</button>
    </form>
  )
}

export default FormDaisy