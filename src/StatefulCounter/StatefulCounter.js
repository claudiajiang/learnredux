import React from "react";
import Count from "./Count/Count";

class StatefulCounter extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    const{
      count
    } = this.state;

    return(
      <div>
        <Count
          count={count}
          incrementCount={this.incrementCount}
        />
        {/*<p>Count: {this.state.count}</p>*/}
        {/*<button onClick={this.incrementCount}>Click</button>*/}
      {/* if you use this.incrementCount() aka with parentheses, then function gets called immediately without waiting for onclick*/}
      </div>
    )
  }
}

export default StatefulCounter;