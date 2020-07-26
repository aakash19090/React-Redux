import React, { Component } from 'react'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {this.props.count} times </button>                
            </div>
        )
    }
}

export default ClickCounter
