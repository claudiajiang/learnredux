import React from 'react';

class InputBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  setUpperCase = (event) => {
    //VALUE of input
    console.log(event.target.value)

    this.setState({
      value: event.target.value.toUpperCase(),
    })
  }

  render() {
    return(
      <div>
        <input value={this.state.value} onChange={this.setUpperCase}/>
        {/* input shorthand passes event ^^
        <input onChange = {(event)=>{this.logType(event)}}/>*/}
      </div>
    )
  }
}
export default InputBox;