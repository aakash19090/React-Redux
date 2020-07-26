import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserList } from '../../Redux/Users/userActions'


const AsyncUsers = ({userData, fetchUserData}) => {

    useEffect(()=>{
        fetchUserData()
    }, [])
    return userData.isLoading ? (
        <h2> Loading... </h2>
    ):(
        <div className="user_data">
            <h2>User Data</h2>
            <br/><br/>

            <div className="data">
                {
                    userData && userData.users && userData.users.map(user => {
                        return <div className="user_row" key={user.id}>
                            
                            <div className="data_row">
                                <span className="label">Name - </span> <span className="field_value">{user.name}</span>
                            </div>

                            <div className="data_row">
                                <span className="label">Username - </span> <span className="field_value">{user.username}</span>
                            </div>

                            <div className="data_row">
                                <span className="label">Email - </span> <span className="field_value">{user.email}</span>
                            </div>
                        
                        </div>
                    })
                }
            </div>
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        userData : state.user 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserData : () => dispatch(fetchUserList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncUsers)
