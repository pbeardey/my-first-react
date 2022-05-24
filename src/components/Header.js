import React from 'react'

const Header = ({name}) => {

    return (
        <header>
            <h1>My First React Project</h1>
            <div>{name}</div>
        </header>
    );
}

export default Header;