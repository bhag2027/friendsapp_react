import React, { useState } from 'react'
import NavBar from './NavBar'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const AddFriend = () => {
    const[data,changeData]=useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""
            }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        {
            console.log(data)
            axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("successfully added")
                        
                    } else {
                        alert("error")
                        
                    }
                }
            ).catch().finally()
        }
    }
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>FRIENDS</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">friendName</label>
                                <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">friendNickName</label>
                                <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">DescribeYourFriend</label>
                                <textarea  className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler} ></textarea>
                            </div>
                           
                           
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend