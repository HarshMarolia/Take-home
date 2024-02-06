import React from 'react';
import HeaderFooter from './HeaderFooter';
import Image from './Image';
import Button from './Button';

const MainComponent = () => {
    const handleClick = () => {
        alert('Hello, World');
    };

    return (
        <div className="full-page">
            <HeaderFooter title={"Header"}/>
            <div className="image-container">
                <Image src="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb" desc="Road to Happiness" />
                <div className="overlay"></div>
                <h1 className="title">Road to Happiness</h1>
                <Button handleClick={handleClick} title="Click here"/>
            </div>
            <HeaderFooter title={"Footer"}/>
        </div>
    );
};

export default MainComponent;
