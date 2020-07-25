import React, { Component } from 'react'
import hocCounter from './hocCounter'


class HoverCounter extends Component {
        
    render() {
        return (
            <div>
                <h2 
                    onMouseEnter={this.props.incrementCount}>
                    Hovered {this.props.count} Times
                </h2>
            </div>
        )
    }
}

export default hocCounter(HoverCounter,1)