import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import fakeData from '../../FakeData/FakeData';
import './Register.css';
const Register = () => {
    const { id } = useParams();
    const { allUsers, allEvents } = useContext(userContext);
    const [users, setUsers] = allUsers;
    const [events, setEvents] = allEvents;
    let history = useHistory();
    const data = fakeData.find( event=> event.id == id)
    const [inputValue, setInputValue] = useState({
        date: "",
        Descriptions: "",
    })

    const handleBlur = (e) => {
        const userDetails = { ...inputValue };
        if (e.target.name == "date") {
            userDetails.date = e.target.value;
        }
        else if (e.target.name == "Descriptions") {
            userDetails.description = e.target.value;
        }
        setInputValue(userDetails)
    }

    const handleSubmit = (e) => {
        const newUserDetails = { ...users }
        newUserDetails.date = inputValue.date;
        newUserDetails.category = data.name;
        newUserDetails.description = inputValue.description;
        newUserDetails.categoryImg = data.img;
        setUsers(newUserDetails)
        fetch('https://secret-shelf-99486.herokuapp.com/addVlounteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserDetails),
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/allEvents')
                }
            })
        e.preventDefault();
    }

    return (
        <div className="register-container container" >
            <div className="text-center m-auto">
                <img src="https://i.postimg.cc/SRQ7nGzZ/Group-1329.png" alt=""/>
            </div>
            <form onSubmit={handleSubmit} className="w-50 mt-5 pt-5 mx-auto" >
                <h2>register as volunteer </h2>
                <div className="form-group mt-3">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" value={users.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input type="email" className="form-control" value={users.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Date</label>
                    <input required onBlur={handleBlur} name="date" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="Descriptions">Descriptions</label>
                    <textarea onBlur={handleBlur} className="form-control" rows="3" placeholder="Descriptions" name="Descriptions" ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="Organization">Organization books at the library</label>
                    <input value={data.name} type="text" className="form-control" />
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register; 