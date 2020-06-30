import React from 'react';

class ShitCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "eric"
        }
    }


    render () {
        return (
            <ChildA name={this.state.name}/>
        )
    }
}

const ChildA = (props) => {
    return <div>
        I'm A

        <ChildB name={props.name}/>
    </div>
}

const ChildB = (props) => {
    return <div>
        I'm B

        <ChildC name={props.name}/>
    </div>
}

const ChildC = (props) => {
    return <div>
        I'm C
        <p>{props.name}</p>
    </div>
}

export default ShitCode;