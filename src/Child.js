import React, { Component } from 'react'

class Child extends Component {
    state = {  }
    render() {
        return (
            <div>
                {this.props.test}
            </div>
        );
    }
}

/*const Child  = () {
    return (
        <div>
            Child Component
        </div>
    );
}*/
export default Child;