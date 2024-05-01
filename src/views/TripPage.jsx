import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class TripPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{display: "flex", justifyContent: "center"}}>
                    <img className="img-fluid" src="../images/trip.jpg"></img>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TripPage;