import React from 'react';

// import Views
import LoginPage from "./views/LoginPage";
import HomePage from './views/HomePage';
import SignUpPage from './views/SignUpPage';
import PlaceDetailPage from './views/PlaceDetailPage';
import NotFoundpage from "./views/NotFoundpage";
import ProductPage from './views/ProductPage';
import PlacePage from './views/PlacePage';
import AboutPage from './views/AboutPage';
import AdminPage from './views/AdminPage';
import SchedulePage from './views/SchedulePage';
import PostPage from './views/PostPage';
import NewFeedPage from './views/NewFeedPage';
import PostDetailPage from './views/PostDetailPage';
import DestinationDetailPage from './views/DestinationDetailPage';
import TripPage from './views/TripPage';
import ContactPage from './views/ContactPage';
import FairyLand from './views/FairyLand';
import AdventureLand from './views/AdventureLand';
import KingsGarden from './views/KingsGarden';
import WorldsGarden from './views/WorldsGarden';
import SeaWorld from './views/SeaWorld';
import TropicalParadise from './views/TropicalParadise';
import Event1 from './views/Event1';
import Event2 from './views/Event2';
import Event3 from './views/Event3';
import Event4 from './views/Event4';
import Event5 from './views/Event5';
import Event6 from './views/Event6';


const ROUTERS = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/login',
        exact: false,
        main: ({history}) => <LoginPage history={history} />
    },
    {
        path: '/sign-up',
        exact: false,
        main: () => <SignUpPage/>
    },
    {
        path: '/product',
        exact: false,
        main: () => <ProductPage />
    },
    // {
    //     path: '/place',
    //     exact: true,
    //     main: () => <PlacePage/>
    // },
    // {
    //     path: '/place/:id',
    //     exact: true,
    //     main: (object) => <PlaceDetailPage object={object} />
    // },
    {
        path: '/trip',
        exact: false,
        main: () => <TripPage/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage/>
    },
    {
        path: '/place/fairy-land',
        exact: true,
        main: () => <FairyLand />
    },
    {
        path: '/place/adventure-land',
        exact: true,
        main: () => <AdventureLand />
    },
    {
        path: '/place/kings-garden',
        exact: true,
        main: () => <KingsGarden />
    },
    {
        path: '/place/worlds-garden',
        exact: true,
        main: () => <WorldsGarden />
    },
    {
        path: '/place/sea-world',
        exact: true,
        main: () => <SeaWorld />
    },
    {
        path: '/place/tropical-paradise',
        exact: true,
        main: () => <TropicalParadise />
    },
    {
        path: '/event/1',
        exact: true,
        main: () => <Event1 />
    },
    {
        path: '/event/2',
        exact: true,
        main: () => <Event2 />
    },
    {
        path: '/event/3',
        exact: true,
        main: () => <Event3 />
    },
    {
        path: '/event/4',
        exact: true,
        main: () => <Event4 />
    },
    {
        path: '/event/5',
        exact: true,
        main: () => <Event5 />
    },
    {
        path: '/event/6',
        exact: true,
        main: () => <Event6 />
    },
    {
        path: '/place/destination/:id',
        exact: false,
        main: (object) => <DestinationDetailPage object={object} />
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutPage/>
    },
    {
        path: '/admin/product-management',
        exact: false,
        main: () => <AdminPage/>
    },
    {
        path: '/schedule',
        exact: false,
        main: () => <SchedulePage/>
    },
    {
        path: '/post',
        exact: false,
        main: ({history}) => <PostPage history={history}/>
    },
    {
        path: '/post-detail',
        exact: false,
        main: () => <PostDetailPage/>
    },
    {
        path: '/newfeed',
        exact: false,
        main: () => <NewFeedPage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundpage />
    },
]

export default ROUTERS;