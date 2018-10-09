import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Header from './MainContentHeader'
import Question from './MainContentQuestion'
import Nav from './MainContentNav'

export default class MainHeader extends Component {
  state = {
    questionPage: 0,
    score: undefined,
  }

  reset = () => this.setState({ questionPage: 0, score: undefined,})
  render() {
    const { questions } = this.props
    const { questionPage, score } = this.state
    return (
      <div>
        { questionPage >= 1 ?
          questions.slice(questionPage, questionPage + 1).map(({
            category,
            difficulty,
            question,
          }) => (
            <React.Fragment>
              <Header
                key={category}
                questionPage={questionPage}
                category={category}
                difficulty={difficulty}
              />
              <Question
                key={`${category}Q`}
                question={
                  _.unescape(question)
                    .replace(/&#039;/g, "'")
                    .replace(/&epsilon;/g, 'E')
                    .replace(/&Phi;/g, 'Φ')
                }
              />
              <Nav
                key={`${category}Nav`}
                score={score}
                reset={this.reset}
              />
            </React.Fragment>
          ))
          : 
          <React.Fragment>
          <h1>TRVIA CHALLENGE</h1>
          <div>Can you Poop?</div>
          <button onClick={() => this.setState({ questionPage: 1})}>Begin</button>
          </React.Fragment>
    }
      </div>
    )
  }
}

MainHeader.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}
