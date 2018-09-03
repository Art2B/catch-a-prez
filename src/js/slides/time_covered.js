import React, { Component } from 'react'

class TimeCovered extends Component {
  constructor () {
    super()
    this.state = {
      fromDate: Date.UTC(1994, 1, 11, 20, 50),
      toDate: Date.now()
    }
  }


  componentDidMount() {
    this.timer = setInterval(this.updateNow.bind(this), 500)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  updateNow () {
    this.setState({
      toDate: Date.now()
    })
  }

  render () {
    const { fromDate, toDate } = this.state

    return (
      <div className="slide time-covered">
        <h1>From</h1>
        <p>{ fromDate }</p>
        <h1>To</h1>
        <p>{ toDate }</p>
      </div>
    )
  }
}

export default TimeCovered
