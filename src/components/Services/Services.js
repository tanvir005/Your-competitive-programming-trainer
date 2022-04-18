import React, { useState } from 'react';
import LoadData from '../../Hooks/LoadData';
import DisplayService from '../DisplayService/DisplayService';

const Services = () => {
    const [reviews, setReviews] = LoadData();
    const [searchResult, setSearchReasult] = useState([]);

    const handleSearchChan = event => {
        const searchText = event.target.value;
        const match = reviews.filter(v => v.name.toLowerCase().includes(searchText));
        setSearchReasult(match);
    }
    return (
        <div>
            {/* <div style={{ 'margin': '20px' }}>
                <input onChange={handleSearchChan} type="text" placeholder="search" />
            </div> */}
            <h1 className="text-3xl font-bold text-blue-900 mt-20">Customers Reviews({reviews.length})</h1>
            <div className="grid md:grid-cols-3">

                {/* {
                        searchResult.map(review => <ReviewsDisplay
                        key={review.id}
                        review={review}
                    ></ReviewsDisplay>)
                } */}
                {
                    reviews.map(review => <DisplayService
                        key={review.id}
                        review={review}
                    ></DisplayService>)
                }

            </div>
        </div>
    );
};

export default Services;