import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import logo from './../../images/Group 1329.png';

const Navbar = () => {
    const history = useHistory()
    const {allUsers} = useContext(userContext);
    const [users,setUsers] = allUsers;
    const handleAdmin = ()=>{
        history.push('/admin')
    }
    return (
           <div classNameName="container header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Donations</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/event" >Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/" >Blog</NavLink>
                        </li>
                    </ul>
                    {
                        users.name ?
                            <>
                                <h6 className="m-1" >{users.name}</h6>
                                <img className="ml-2" style={{ height: "60px", borderRadius: "50px" }} src={users.img} alt="user-img" />
                            </>
                            :
                            <>
                                <button onClick={handleAdmin} className="btn btn-success" >Admin</button>
                            </>
                    }
                </div>
            </nav>
        </div> 
    );
};

export default Navbar;