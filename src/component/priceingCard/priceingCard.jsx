import React from 'react';

const priceingCard = ({ priceing }) => {
     console.log(priceing);
    return (
        <div className='text-white'>
            <div>
                <h1 className='text-7xl'>{priceing.title}</h1>
            </div>
        </div>
    );
};

export default priceingCard;