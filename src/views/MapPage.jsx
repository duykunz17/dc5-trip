import React, { Component } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }
    componentDidMount() {
        this.checkIsMobile();
        window.addEventListener('resize', this.checkIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkIsMobile);
    }

    checkIsMobile = () => {
        const isMobile = window.innerWidth <= 900; // Adjust the breakpoint as needed
        this.setState({ isMobile });
    };

    render() {
        const { isMobile } = this.state;
        const containerStyle = {
            maxWidth: '100vw', // Ensure the container takes the full width of the viewport
            transform: 'rotate(90deg)'
        };

        const imageStyle = {
            height: '100vw', // Let the height adjust to maintain aspect ratio
        };

        return (
            <div>
                <Header />
                {
                    isMobile ? <div style={containerStyle}>
                        <img style={imageStyle}  src="../images/map.jpg" alt="Landscape Image" />
                    </div> :
                        <img className="img-fluid" src="../images/map.jpg" alt="Landscape Image" />
                }
                {
                    !isMobile && <Footer />
                }

            </div >

        );
    }
}

export default MapPage;
