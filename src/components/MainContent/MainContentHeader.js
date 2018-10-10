import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ category, difficulty }) => (
  <React.Fragment>
    <h1 id='category' key={`${category}h1`}>{category}</h1>
    <h2 id='difficulty' key={`${category}h2`}>Difficulty: {difficulty}</h2>
  </React.Fragment>
)

Header.propTypes = {
  category: PropTypes.string,
  difficulty: PropTypes.string,
}

Header.defaultProps = {
  category: '',
  difficulty: '',
}

export default Header
