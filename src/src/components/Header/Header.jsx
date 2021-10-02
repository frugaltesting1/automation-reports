import React from 'react';
import headimg from './friends.png';
import './Header.css';


const Header =({headTitle, headerExpanded}) => 
{
    return (
        <div className="head-container">
            <img 
                src={headimg} 
                className = {`head-image ${headerExpanded? 'head-image-expanded' : 'head-image-contracted'}`} 
                alt="HeaderImage"
            />
            <h1 className="head-text">{headTitle}</h1>
        </div>
    );
};


export default Header;