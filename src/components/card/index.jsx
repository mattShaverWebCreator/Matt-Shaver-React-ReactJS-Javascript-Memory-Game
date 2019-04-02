import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({ handleClick, id, type, flipped, solved, back, front,
  height, width, disabled}) {
  return <div
  className={`flip-container ${flipped ? 'flipped' : ''}`}
  style={{
    width, height
  }}
  onClick={() => disabled ? null : handleClick(id)}
  >
   <div className="flipper">
    <img
      style={{
        height, width
      }}
      className={flipped ? 'front' : 'back'}
      src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
    />
    </div>
  </div>
}


Card.propTypes = {
  solved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
}
