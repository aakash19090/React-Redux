import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1 onMouseEnter={this.props.incrementCount}>Hovered {this.props.count} times </h1>                
            </div>
        )
    }
}

export default HoverCounter
