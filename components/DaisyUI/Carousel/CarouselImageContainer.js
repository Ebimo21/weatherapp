import React from 'react'
import Image from 'next/image'

const CarouselImageContainer = ({clName, src}) => {
  return (
    <div className={clName}>
        <Image src={src} className={`w-full`} alt="image" width={`192px`} height={`300px`} />
  </div>
  )
}

export default CarouselImageContainer