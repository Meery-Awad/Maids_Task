import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import './usersList.css';
import UserDetails from "../HomePage/UserDetails/userDetails";

const UsersList = () => {



    // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { users, searchBox, setUserId } = useBetween(state.useShareState);
    // </get the data from rducers>

    const [showUserDetails, setUserDetails] = useState(false);
    const handleCloseUserDetails = () => setUserDetails(false);




    const tempSkeletonTop10 = ['skeletonTop1', 'skeletonTop2', 'skeletonTop3', 'skeletonTop3', 'skeletonTop5'];
    var skeletonTop10 = tempSkeletonTop10.map((skeleton, index) => {
        return (

            <div className='userInfo skeleton skeleton-top-10-load' key={skeleton} >
                <div className=' userAvatar skeleton ' style={{ color: '#eee' }}>{index + 1}</div>
                <div className={`${index <= users.length ? "top3id skeleton" : "skeleton"}`}></div>
                <div className='skeleton' style={{ marginTop: '-45px' }} />
                <div className='  title-animate' style={{ width: '25%' }}>
                    <div className=' skeleton skeleton-text-top10'></div>
                    <div className=' skeleton skeleton-text-top10'></div>
                    <div className=' skeleton skeleton-text-top10'></div>
                </div>
            </div>
        )
    })
    setTimeout(() => {
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-top-10-load');
        for (let i = 0; i < skeletonTodoLoad.length; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('list-top-10-load');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'block'
        }

    }, 2000)
    const ListItems = users.length ? (
        users.map(item => {
            const first_name = item.first_name.toLowerCase();
            const last_name = item.last_name.toLowerCase();

            if (first_name.includes(searchBox.toLowerCase()) || last_name.includes(searchBox.toLowerCase()))
                return (

                    <span className="userInfo  list-top-10-load" key={item.id} style={{ zIndex: '0' }}>

                        <img src={item.avatar} className="userAvatar"></img>
                        <span>
                            <h5>{item.first_name} {item.last_name}</h5>

                            <div className="userId">user id: {item.id}</div>
                        </span>
                        <button onClick={() => {
                            setUserId(item.id);
                            setUserDetails(true)
                        }}>More</button>


                    </span>


                )
        })
    ) : (

        <p></p>
    )

    return (

        <div className="UsersList"   >

            <div className="headingStyle"></div>
             <div className="col-md-12 text-center heading-main" style={{zIndex:'3'}}>
                <h2 classnName="heading" style={{color:'#fff'}}>All Users</h2>
                <div className="separator"><i className="fa fa-home below-line-about-icon"></i></div>
            </div>

            {skeletonTop10}
            <div className="list ">
                {ListItems}
            </div>


            <Modal show={showUserDetails} onHide={handleCloseUserDetails} size='lg'>

                <Modal.Body><UserDetails /></Modal.Body>
                <Modal.Footer dir="auto">

                    <Button className="btn btn-calendar-modal-cancel"
                        onClick={handleCloseUserDetails}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>


        </div >





    );
}

export default UsersList;