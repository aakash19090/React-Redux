import React, { Component } from 'react'
import updateComponent from './hocCounter'


class HoverCounter extends Component {
        
    render() {
        return (
            <div>
                <h2 onMouseEnter={this.props.incrementCount}>Hovered {this.props.count} Times</h2>
            </div>
        )
    }
}

export default updateComponent(HoverCounter)