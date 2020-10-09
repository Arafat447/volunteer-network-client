import React, { useEffect, useState } from 'react';
import './Admin.css';
import logo from '../../images/Group 1329.png'

const Admin = () => {
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://secret-shelf-99486.herokuapp.com/getAllUser')
            .then(res => res.json())
            .then(info => setData(info))
    }, [data])

    const handleDeleteEvents = (id) => {

        fetch(`https://secret-shelf-99486.herokuapp.com/removeEvents/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setSuccess(true)
                }
            })


    }
    return (
        <div className="admin" >
            <div className="" >
                <div className="admin-header p-4 d-flex" >
                    <img src={logo} alt="logo" />
                    <h4 className="pl-5 ml-5  m-4">Volunteer register list</h4>
                </div>
            </div>
            <div className="main-content d-flex  w-100"  >
                <div className="w-25 admin-img container ml-3 mt-3" >
                    <div>
                        <p style={{
                            fontWeight: "bold",
                            color: "Blue"
                        }} className=" mb-3"  >
                            <img src="https://i.postimg.cc/wjPFbRZ3/users-alt-1.png" alt="" />Volunteer Register List </p>

                    </div>
                    <div>
                        <p style={{
                            fontWeight: "bold",
                            color: "Blue"
                        }}>
                            <img src="https://i.postimg.cc/3xWnBFLP/plus-1.png" alt="" />
                                    Add event
                                </p>
                    </div>
                </div>
                <div className="w-75 all-data d-flex align-items-center">
                    <div className="admin-data-wrapper w-100" >
                        <table className="">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Registrations Date</th>
                                    <th scope="col">Volunteer List</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(eventDetail =>
                                    <tr key={eventDetail.id}>
                                        <td>{eventDetail.name}</td>
                                        <td>{eventDetail.email}</td>
                                        <td>{eventDetail.date}</td>
                                        <td>{eventDetail.category}</td>
                                        <td className="delete-button">
                                            <button onClick={() => handleDeleteEvents(eventDetail._id)} className='bg-danger ' >
                                                <img src="https://i.postimg.cc/nc33BP14/trash-2-9.png" alt="delete-icon" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </div >
    );
};

export default Admin;