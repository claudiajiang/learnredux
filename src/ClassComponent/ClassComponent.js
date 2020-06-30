//CLASS COMPONENT - holds state
//1. need to render, then return ALWAYS
//2. needs a constructor, constructor takes in props, and super prop
import React from 'react';
import _ from 'lodash'; //has a function to clone deep

class ClassComponent extends React.Component{ //always looks like this
  constructor(props){
    super(props);

    this.state = {
      //array with unique id
      headlines: [
          {id: 'hl1', name: 'Godzilla'},
          {id: 'hl2', name: 'Harper'},
          {id: 'hl3', name: 'Gideon'}
        ],
      names: ['claudia', 'eric', 'yadong'],
      namedic: {
        eric: 1,
        claudia: 2,
        harper: 3
      },
      showDiv: true
    }
  }

  changeState = () => {
    this.setState({
      variable: 'World'
    })
  }

  //never directly modify a state variable
  deleteRow = (headlineID) => {
    const headlines = this.state.headlines.filter((headline) =>
      headline.id !== headlineID
    )
    this.setState({
      headlines: headlines
    })
  }

  editRow = () => {
    console.log("Clicked");
    // for flat array, shallow copy, spread syntax using ... works for flat dictionary
    // const names = [...this.state.names]
    // const namedic = {...this.state.namedic}

    const headlines = _.cloneDeep(this.state.headlines); // use this to not modify headlines directly!!
    headlines[0].name = 'Notzilla';
    this.setState({
      headlines: headlines
    })
  }

  addRow = () => {
    const headlines = _.cloneDeep(this.state.headlines);
    headlines.push({id: 'hl4', name: 'HarperLove'});
    this.setState({
      headlines: headlines
    })
  }

  render(){ //called every time a state variable updates
    //console.log before return within render aka HERE


    return (
      <div>
        {this.state.showDiv ? <h1>Show me if value == true</h1> : <h1> False </h1>}

        {/*curly braces for JS, map always returns something, returns array with same exact num of elements as array passed in*/}
        <table>
          <tbody>
          {
            this.state.headlines.map((headline) => {
              return <tr
                key={headline.id}
                onClick={()=>this.deleteRow(headline.id)}

              ><td> {headline.name} </td></tr>
              {/*  onClick={this.deleteRow(headline.id)} doesn't work, will get called without waiting for onclick*/}
            })
          }
          </tbody>
        </table>

        <button onClick={this.addRow}>Add</button>
        <button onClick={this.editRow}>Edit</button>

      </div>
    )
  };
}
export default ClassComponent;

/* STATE
- just a variable, dictionary
  this.state = {} // ONLY IF THIS CHANGES
- key: value,
- stored within class
*/

//only use this for class, not function