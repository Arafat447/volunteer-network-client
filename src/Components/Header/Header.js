import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import logo from './../../images/Group 1329.png';
import './Header.css';
const Header = () => {
    const {allUsers} = useContext(userContext);
    const [users,setUsers] = allUsers;
    const handleRegister = ()=>{

    }
    const handleAdmin = ()=>{

    }
    return (
        <div classNameName="container header-wrapper">
            <Navbar></Navbar>
            <div className="header-content text-center mt-5 mb-3" >
                <h1>I grow by helping people in need.</h1>
                <div className="input-group mb-3 w-50 m-auto mt-5">
                    <input type="text" className="form-control " placeholder="Search"
                        aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="input-group-prepend ">
                        <button className="btn w-100  btn-primary" >Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;