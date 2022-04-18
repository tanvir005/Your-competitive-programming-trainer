import React, { useState } from 'react';
import LoadData from '../../Hooks/LoadData';
import DisplayService from '../DisplayService/DisplayService';

const Services = () => {
    const [item, setItem] = LoadData();


    return (
        <div>

            <h1 className="text-3xl font-bold text-blue-900 mt-20 text-center">Total {item.length} srvices available</h1>
            <div className="grid md:grid-cols-3">


                {
                    item.map(review => <DisplayService
                        key={review.id}
                        review={review}
                    ></DisplayService>)
                }

            </div>
        </div>
    );
};

export default Services;