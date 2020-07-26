import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../Redux/index'
import { buyIcecream } from '../../Redux/index'

function DemoCakeContainer(props) {
    return (
        <div>
            <br/><br/>
            <h2>Number of Items left = {props.itemCount} </h2>
            <button onClick={props.buyItem} >Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const propItem = ownProps.cake
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIcecream

    return {
        itemCount: propItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? ()=> dispatch(buyCake(1))
    : ()=> dispatch(buyIcecream(1))

    return {
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DemoCakeContainer)
