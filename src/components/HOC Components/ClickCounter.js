import React, { Component } from 'react'
import hocCounter from './hocCounter'

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {this.props.count} Times</button>                
            </div>
        )
    }
}

export default hocCounter(ClickCounter)
