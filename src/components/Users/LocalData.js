import React from 'react'
import jsonData from './data.json'
const LocalData = ()=> {
    console.log(jsonData)
    return (
        <div>
            <h3>Users</h3>
            <ul>
                {
                    jsonData.map(user=> {
                        return <li key={user.id}>
                            {user.ip_address}
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default LocalData
