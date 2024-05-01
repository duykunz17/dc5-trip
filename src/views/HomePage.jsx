import React, { Component } from 'react';

import Header from '../components/Home/Header';
import Search from '../components/Home/Search/Search';
import Footer from '../components/Home/Footer';

import Banner from '../components/Banner';
import Utilities from '../components/Utilities';
import RecentTrip from '../components/RecentTrip';

import PopularPlaces from '../components/Places/PopularPlaces';
import Destination from '../components/Destination/Destination';

import callAPI from '../utils/connectAPI';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destinations: []
        }
    }

    componentDidMount() {
        callAPI('place/popular-place', 'GET', null)
            .then(res => {
                this.setState({
                    destinations: res.data
                })
                //console.log(res.data);
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        var { destinations } = this.state;
        return (
            <div className="HomePage">
                <Header/>
                <Banner />
                {/* <Search title="Bạn muốn đi đâu?" input="Nhập tên địa điểm"/> */}
                <PopularPlaces>
                    { this.showDestinations(destinations) }
                </PopularPlaces>
                <Utilities/>
                <RecentTrip/>
                <Footer/>
            </div>
        );
    }

    showDestinations = (destinations) => {
        let result = null;
        if (destinations.length > 0) {
            
            result = destinations.map((currentDestination, index) => {
                
                return (
                    <Destination
                        key={index}
                        destination={currentDestination}
                    />
                );
            });
        }
        return result;
    }
}

export default HomePage;