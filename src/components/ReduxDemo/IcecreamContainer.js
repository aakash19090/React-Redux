import React, { Component } from 'react'
import { connect } from  'react-redux'
import { buyIcecream } from '../../Redux/index'
class IcecreamContainer extends Component {
    render() {
        return (
            <div>
                <h1>Number Of IceCreams - {this.props.numOfIcecream}</h1>
                <button onClick={this.props.buyIcecream}>Buy IceCreams</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfIcecream : state.iceCream.numOfIcecream
    }
}   

const mapDispatchToProps = dispatch => {
    return{
        buyIcecream : () => dispatch(buyIcecream())
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps) 
(IcecreamContainer)
