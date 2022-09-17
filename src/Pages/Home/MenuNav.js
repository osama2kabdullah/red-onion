import React from 'react';
import CustomLink from '../shared/CustomLink';

const MenuNav = () => {
    return (
        <nav className='flex text-xl justify-center gap-5'>
            <CustomLink to='breakfast'>Breakfast</CustomLink>
            <CustomLink to='lunch'>Lunch</CustomLink>
            <CustomLink to='dinner'>Dinner</CustomLink>
        </nav>
    );
};

export default MenuNav;