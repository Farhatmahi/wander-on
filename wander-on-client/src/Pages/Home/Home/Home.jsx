import React from 'react';
import BackpackingTrips from '../BackpackingTrips';
import CustomiseTrip from '../CustomiseTrip';
import EarlyBirdTrips from '../EarlyBirdTrips';
import Explore from '../Explore';
import HomeBanner from '../HomeBanner';
import SecretSauce from '../SecretSauce';
import TalkToExpert from '../TalkToExpert';
import Testimonial from '../Testimonial';
import UpcomingTrips from '../UpcomingTrips';
import WeekendTrips from '../WeekendTrips';

const Home = () => {
    return (
        <div className='space-y-8 lg:space-y-14'>
            <HomeBanner />
            <Explore />
            <UpcomingTrips />
            <BackpackingTrips />
            <WeekendTrips />
            <EarlyBirdTrips />
            <TalkToExpert />
            <CustomiseTrip />
            <SecretSauce />
            <Testimonial />
        </div>
    );
};

export default Home;