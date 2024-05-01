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
import Place1 from './views/Place1';
import Place2 from './views/Place2';
import Place3 from './views/Place3';
import TripPage from './views/TripPage';
import ContactPage from './views/ContactPage';


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
        path: '/place/1',
        exact: true,
        main: () => <Place1 />
    },
    {
        path: '/place/2',
        exact: true,
        main: () => <Place2 />
    },
    {
        path: '/place/3',
        exact: true,
        main: () => <Place3 />
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