import React from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const Score = ({ correct, yourAnswer, question }) => (
  <tr>
    <td style={({ padding: '10px', width: '15%', textAlign: 'center' })} key={Math.random()}>
      <p>{correct
        ? <FaCheckCircle style={({ color: 'limegreen', fontSize: '24px' })} />
        : <FaExclamationCircle style={({ color: 'orangered', fontSize: '24px' })} />}
      </p>
    </td>
    <td
      style={({ padding: '10px', width: '20%', textAlign: 'center', color: correct ? 'limegreen' : 'orangered' })}
      key={Math.random()}
    ><p>{yourAnswer}</p>
    </td>
    <td
      style={({ padding: '10px', width: '65%', color: correct ? 'limegreen' : 'orangered' })}
      key={Math.random()}
    ><p>{question}</p>
    </td>
  </tr>
)

Score.propTypes = {
  correct: PropTypes.bool.isRequired,
  yourAnswer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
}

export default Score
