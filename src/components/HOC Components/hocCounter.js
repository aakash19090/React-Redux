import React from 'react'

// Keep HOC component same as Filename
const hocCounter = WrappedComponent => {  // IN paramenter pass original component as WrappedComponent
    class HocCounter extends React.Component{  // Change Main component name to Pascal Case to return it as new Component

        constructor(props) {
            super(props)
        
            this.state = {
                count : 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState =>{
                return {
                    count : prevState.count + 1
                }
            })
        }

        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }

    return HocCounter
}

export default hocCounter