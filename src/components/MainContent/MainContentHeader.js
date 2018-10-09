import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ category, difficulty }) => (
  <React.Fragment>
    <h1>Category: {category}</h1>
    <h2>Difficulty: {difficulty}</h2>
  </React.Fragment>
)

Header.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Header
