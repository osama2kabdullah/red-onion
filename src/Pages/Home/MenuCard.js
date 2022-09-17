import React from 'react';

const MenuCard = ({title, price, img}) => {
    return (
        <div className='text-center w-fit mx-auto p-4 leading-10 rounded-3xl hover:shadow-md'>
            <img className='w-36 mx-auto' src={img} alt="" />
            <h3 className='text-xl font-bold'>{title}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
            <h2 className='text-2xl font-bold'>${price}</h2>
        </div>
    );
};

export default MenuCard;