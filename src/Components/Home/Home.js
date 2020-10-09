import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../FakeData/FakeData';
import './Home.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    const events = fakeData;
    return (
        <div className="container home-wrapper">
            <Header></Header>
            <div className="row">
                {
                    events.map(data =>
                        
                        <div className="col-lg-3 text-center mt-4">
                            <div className="event-container">
                                <Link to={`/register/${data.id}`}>
                                    <img src={data.img} alt="" />
                                    <h5 className="text-primary mt-3">{data.name}</h5>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;