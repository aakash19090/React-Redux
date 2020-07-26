import React, { Component } from 'react'
import { connect } from  'react-redux'
import { buyIcecream } from '../../Redux/index'
class IcecreamContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            qty:1     
        }
    }
    
    
    changeQuantity = (e) =>{
        this.setState({qty:e.target.value})
    }
    
    render() {
        const qty =  this.state.qty
        return (
            <div>
                <h1>Number Of IceCreams - {this.props.numOfIcecream}</h1>
                <input type="text" value={qty} onChange={this.changeQuantity} />
                <button onClick={() => this.props.buyIcecream(qty)}>Buy {qty} IceCreams</button>
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
        buyIcecream : qty => dispatch(buyIcecream(qty))
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps) 
(IcecreamContainer)
