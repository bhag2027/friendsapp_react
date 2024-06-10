import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewFriend = () => {
    const[data,changeData]=useState(
        [{"_id":"666694bf2a16f0afd5e07bba","name":"nithya","friendName":"kj","friendNickName":"lhp","DescribeYourFriend":"kihh;[j","__v":0}]
    )

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-bordered">
                                
                                    <thead>
                                        <tr>
                                            <th scope="col">SNO</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">FriendName</th>
                                            <th scope="col">FriendNickName</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value,index)=>{
                                                return<tr>
                                                <td>{value.index+1}</td>
                                                <td>{value.name}</td>
                                                <td>{value.friendName}</td>
                                                <td>{value.friendNickName}</td>
                                                <td>{value.DescribeYourFriend}</td>
                                            </tr>
                                            }
                                        )}
                                        
                                    </tbody>
                                </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriend