import React from 'react'

import PropTypes from 'prop-types'

// import './store-banner.css'

const StoreBanner = (props) => {
  return (
    <div className="store-banner-store-banner">
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        width={135}
        height={40}
        className="store-banner-image"
      />
      <img
        alt={props.image_alt}
        src={props.image_src}
        width={135}
        height={40}
        className="store-banner-image1"
      />
    </div>
  )
}

StoreBanner.defaultProps = {
  image_src: '/static/playground_assets/app-store-badge-200h.png',
  image_alt1: 'image',
  image_src1: '/static/playground_assets/google-play-badge-200h.png',
  image_alt: 'image',
}

StoreBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StoreBanner
