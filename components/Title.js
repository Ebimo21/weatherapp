import React from 'react'

const Title = ({clName, content}) => {
  return (
    <>
      <h1 className={clName}>{`${content}`}</h1>
    </>
  )
}

export default Title
