import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onRandomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({num: randomNum})
  }

  render() {
    const {num} = this.state

    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onRandomNumber}
          >
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
