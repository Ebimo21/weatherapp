import React from 'react'

const LabelDaisy = ({label}) => {
  return (
    // <div>Lable</div>
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
  )
}

export default LabelDaisy