import React from 'react'

import PropTypes from 'prop-types'
import Image from 'next/image'

// import './stats-card.css'

const StatsCard = (props) => {
  return (
    <div className="stats-card-container">
      <Image
        alt={props.image_alt}
        src={props.image_src}
        width={32}
        height={32}
        className="stats-card-image"
      />
      <div className="stats-card-container1">
        <h1 className="Headline4">{props.number}</h1>
        <span className="Body1">{props.description}</span>
      </div>
    </div>
  )
}

StatsCard.defaultProps = {
  number: '10',
  image_src: '/landify/static/playground_assets/05.svg',
  description: 'Description',
  image_alt: 'image',
}

StatsCard.propTypes = {
  number: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StatsCard
