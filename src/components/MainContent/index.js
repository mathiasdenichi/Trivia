import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Header from './MainContentHeader'
import Question from './MainContentQuestion'
import Nav from './MainContentNav'
import Score from './MainContentScore'

export default class MainHeader extends Component {
  state = {
    questionPage: undefined,
    score: 0,
    questionBank: [],
  }

  checkAnswer = (bool) => {
    const { questions } = this.props
    const { questionPage, score, questionBank } = this.state
    const currentQuestion = questions.slice(questionPage, questionPage + 1)
    const match = _.find(currentQuestion, { correct_answer: bool })
    const stats = currentQuestion.map(({ question }) =>
      ({ correct: !!match, yourAnswer: bool, question }))
    if (match && questionPage <= 9) {
      this.setState({
        questionPage: questionPage + 1,
        score: score + 1,
        questionBank: [...questionBank, ...stats],
      })
    } else {
      this.setState({
        questionPage: questionPage + 1,
        questionBank: [...questionBank, ...stats],
      })
    }
  }

  beginRestart = () => {
    const { fetchQuestions } = this.props
    const { questionPage } = this.state
    this.setState({
      questionPage: !questionPage ? 0 : undefined,
      score: 0,
    })
    if (questionPage === 10) {
      this.setState({
        questionBank: [],
      })
      fetchQuestions()
    }
  }

  reset = () => this.setState({ questionPage: undefined, score: 0 })

  render() {
    const { questions } = this.props
    const { questionPage, score, questionBank } = this.state

    return (
      <div>
        { questionPage >= 0 && questionPage <= 9 ?
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
                checkAnswer={this.checkAnswer}
              />
            </React.Fragment>
          ))
          :
          <React.Fragment>
            <h1>{questionPage === 10 ? 'THE END!' : 'TRIVIA CHALLENGE'}</h1>
            <h2>{questionPage === 10 ? `You scored a ${score}/10` : 'START THE TRIVIA!'}</h2>
            {questionPage === 10 ? _.map(questionBank, ({ correct, yourAnswer, question }) => (
              <Score
                correct={correct}
                yourAnswer={yourAnswer}
                question={
                  _.unescape(question)
                    .replace(/&#039;/g, "'")
                    .replace(/&epsilon;/g, 'E')
                    .replace(/&Phi;/g, 'Φ')
                }
              />
            )) : null}
            <button onClick={this.beginRestart}>
              {!questionPage ? 'Begin' : 'Take Another Quiz'}
            </button>
          </React.Fragment>
    }
      </div>
    )
  }
}

MainHeader.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  fetchQuestions: PropTypes.func.isRequired,
}
