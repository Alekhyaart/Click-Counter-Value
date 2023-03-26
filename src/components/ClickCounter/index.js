// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-counter-container">
        <h1 className="click-counter-head">
          The Button has been Clicked
          <br /> <span className="counter-value">{count}</span> times
        </h1>
        <p className="click-count-desc">
          Click the button to increase the count!
        </p>
        <div>
          <button type="button" className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
