import React, { Component } from 'react'

import badGif from 'assets/img/bad.gif'
import noMichaelGif from 'assets/img/no_michael.gif'
import narcisseImg from 'assets/img/narcisse.jpg'
import darthMaulGif from 'assets/img/darth_maul.gif'

class Bad extends Component {
  constructor () {
    super()
    this.state = {
      subStep: 0
    }
  }

  componentDidMount () {
    window.addEventListener("keypress", e => {
      if (e.key === 'ArrowDown' && this.state.subStep < 3) {
        this.setState({
          subStep: this.state.subStep + 1
        })
      }
      if (e.key === 'ArrowUp' && this.state.subStep > 0) {
        this.setState({
          subStep: this.state.subStep - 1
        })
      }
    })
  }

  changeSubStep () {
  }

  render () {
    const { subStep } = this.state

    return (
      <div className="slide slide-text" onClick={() => this.changeSubStep()}>
        <h1>A bad person</h1>
        { subStep === 0 && (
          <div>
            <h2 className="invisible">a</h2>
            <img className="gif" src={badGif} />
          </div>
        )}
        { subStep === 1 && (
          <div>
            <h2>I don't like meeting</h2>
            <img className="gif" src={noMichaelGif} />
          </div>
        )}
        { subStep === 2 && (
          <div>
            <h2>I'm narcissic</h2>
            <img className="gif" src={narcisseImg} />
          </div>
        )}
        { subStep === 3 && (
          <div>
            <h2>I prefer the Star Wars prelogy</h2>
            <img className="gif" src={darthMaulGif} />
          </div>
        )}
      </div>
    )
  }
}



export default Bad
