import React from 'react'

import imageCollage from '../../img/collage-large.jpeg'

import Card from '../Card/card'
import data from '../../data'

const Main = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })

  return (
    <main className="main-content">
      <div className="hero">
        <img src={imageCollage} alt="Collage" className="collage" />
      </div>
      <h1 className="title">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <div className="deck">{cards}</div>
    </main>
  )
}

export default Main
