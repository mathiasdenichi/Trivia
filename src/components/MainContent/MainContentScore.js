import React from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const Score = ({ correct, yourAnswer, question }) => (
  <tr>
    <td key={Math.random()}>{correct
      ? <FaCheckCircle style={({ color: 'limegreen', fontSize: '24px' })} />
      : <FaExclamationCircle style={({ color: 'orangered', fontSize: '24px' })} />}
    </td>
    <td
      style={({ textAlign: 'center' })}
      key={Math.random()}
    >{yourAnswer}
    </td>
    <td
      key={Math.random()}
    >{question}
    </td>
  </tr>
)

Score.propTypes = {
  correct: PropTypes.bool.isRequired,
  yourAnswer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
}

export default Score
