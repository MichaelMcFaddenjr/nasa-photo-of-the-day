import React from 'react';

function Header(props) {
    const { nasaData } = props 
    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <h2>{nasaData.date}</h2>
        </div>
    )
}
export default Header;