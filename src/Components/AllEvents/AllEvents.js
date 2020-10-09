import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './AllEvents.css'

const AllEvents = () => {
    const {allUsers} = useContext(userContext);
    const [users,setUsers] = allUsers;
    const [userEvents, setUserEvents] = useState([])
    useEffect(() => {
        fetch('https://secret-shelf-99486.herokuapp.com/getEvents?email=' + users.email)
            .then(res => res.json())
            .then(result => setUserEvents(result))
    }, [userEvents]
    )
    const handleDelete = (id) => {
        fetch(`https://secret-shelf-99486.herokuapp.com/deleteEvents/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   
                }
            })

    }
    return (
        <div className="container events-container">
            <Navbar></Navbar>
            <div className="row  mx-auto w-75  mt-5 pt-5"  >
                    {
                        userEvents.map(event =>
                            <div className="col-lg-6" >
                                <div className=" events-wrapper shadow-lg   m-3 d-flex justify-content-space-between">
                                    <img className=" m-2 img-fluid   " src={event.categoryImg} alt="" />
                                    <div className="m-4"  >
                                        <h4>{event.category}</h4>
                                        <h6 className="card-title" >{event.date}</h6>
                                        <button onClick={() => handleDelete(event._id)} className=" mt-1 btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}

                </div>
        </div>
    );
};

export default AllEvents;