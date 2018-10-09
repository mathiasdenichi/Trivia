import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ score }) => (
  <div>
    <button>True</button>
    <button>False</button>
  </div>
)

Nav.propTypes = {
  score: PropTypes.number,
}

Nav.defaultProps = {
  score: undefined,
}

export default Nav
