import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ correct, yourAnswer, question }) => (
    <table>
        <tr>
            <td>{correct ? 'Correct' : 'Incorrect'}</td>
            <td>Your answer: {yourAnswer}</td>
            <td>{question}</td>
        </tr>
    </table>
)

export default Score