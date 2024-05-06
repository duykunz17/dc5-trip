import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class MapPage extends Component {
    render() {
        return (
            <div>
                <Header />

                <img className="img-fluid" src="../images/map.jpg"></img>

                <Footer />
            </div>
        );
    }
}

export default MapPage;