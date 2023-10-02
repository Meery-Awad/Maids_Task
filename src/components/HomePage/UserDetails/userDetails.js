import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import axios from "axios";

import './userDetails.css';

const UserDetails = () => {


    // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { userId } = useBetween(state.useShareState);
    // </get the data from rducers>

    const [userDetails, setUserDetails] = useState({})
    const [userSupport, setUserSupport] = useState({})
    const [dataLoad, setDataLoad] = useState(false)

    useEffect(() => {

        setDataLoad(false);
        setTimeout(() => {
            axios.get(`https://reqres.in/api/users/${userId}`, {
                headers: {
                    // 'Authorization': 'Bearer ' + token,
                    "Content-Type": "application/json;charset=UTF-8"
                }
            })
                .then((response) => {
                    // handle success
                    setDataLoad(true);

                    setUserDetails(response.data.data);
                    setUserSupport(response.data.support);



                })
                .catch((err) => {
                    // handle error

                })

        }, 1000)

    }, [])


    return (
        <>
            {
                !dataLoad &&
                <div className="loading1"></div>

            }
            <div className="UserDetails" >

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                {
                    dataLoad &&

                    <>
                        <img src={userDetails.avatar} className="userAvatar"></img>

                        <span className="Details" >
                            <h4>{userDetails.first_name} {userDetails.last_name}</h4>

                            <p className="info"><i class='fas fa-user-alt'></i> user id: {userDetails.id}</p>

                            <div className="info email"><i className='fas fa-envelope-open'></i> {userDetails.email}</div>

                            <div className="info text">{userSupport.text}</div>
                            <a href={userSupport.url} className="info">Support</a>


                        </span>
                    </>

                }


            </div >

        </>


    );
}

export default UserDetails;