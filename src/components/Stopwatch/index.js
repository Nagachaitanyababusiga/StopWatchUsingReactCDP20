import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {TimeInSeconds: 0}

  start = () => {
    if (this.timerId === undefined) this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({
      TimeInSeconds: prevState.TimeInSeconds + 1,
    }))
  }

  clear = () => {
    clearInterval(this.timerId)
    this.timerId = undefined
  }

  reset = () => {
    this.setState({TimeInSeconds: 0}, () => {
      // console.log(this.timerId)
      this.clear()
    })
  }

  render() {
    const {TimeInSeconds} = this.state
    const seconds = TimeInSeconds % 60
    const minutes = Math.floor(TimeInSeconds / 60)
    const StringSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    const StringMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

    return (
      <div className="cont-1">
        <div className="text-cont">
          <h1>Stopwatch</h1>
          <div className="cont-2">
            <div className="cont-3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer-para">
              {StringMinutes}:{StringSeconds}
            </h1>
            <div className="button-cont">
              <button
                className="button-click green"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
              <button
                className="button-click red"
                type="button"
                onClick={this.clear}
              >
                Stop
              </button>
              <button
                className="button-click yellow"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
