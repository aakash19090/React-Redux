import React from 'react'
import { connect } from 'react-redux'
function DemoCakeContainer(props) {
    return (
        <div>
            <br/><br/>
            <h2>Number of Ice Creams left = {props.itemCount} </h2>
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

export default connect(mapStateToProps)(DemoCakeContainer)
