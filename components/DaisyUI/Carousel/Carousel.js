import React from 'react'
import CarouselImageContainer from './CarouselImageContainer'

const Carousel = ({clName}) => {
  return (
    <div className={clName}>
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2`}>
        </CarouselImageContainer>
        
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB`}>
        </CarouselImageContainer>
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6`}>
        </CarouselImageContainer>
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=225E6693`}>
        </CarouselImageContainer>
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7`}>
        </CarouselImageContainer>
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094`}>
        </CarouselImageContainer>
        <CarouselImageContainer
          clName={`carousel-item w-1/2`}
          src={`https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094`}>
        </CarouselImageContainer>

    </div>
  )
}

export default Carousel