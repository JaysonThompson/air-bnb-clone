import React from 'react'

import star from '../../img/Star.png'

const Card = (props) => {
  console.log(props)
  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'Sold Out'
  } else if (props.location === 'Online') {
    badgeText = 'Online'
  }

  return (
    <div className="card-container">
      <img src={require('../../img/' + props.coverImg)} alt="" />
      {badgeText && <p className="event-status">{badgeText}</p>}
      <div className="rating-container">
        <img src={star} alt="Rating Star" className="star" />
        <div className="star-rating">{props.stats.rating}</div>
        <div className="rating-count">({props.stats.reviewCount})</div>
        <div className="location">{props.location}</div>
      </div>
      <div className="summary">
        <p>{props.summary}</p>
        <div className="price-range">
          <div className="price">From ${props.price} </div>
          <div className="price-unit"> / person</div>
        </div>
      </div>
    </div>
  )
}

export default Card
