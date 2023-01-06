import React from 'react';


function Header() {

    const headerStyle = {
        color: 'white',
        height: '150px',
        textAlign: 'center',
        paddingTop: '50px',
        fontFamily: 'andale mono, monospace',
        fontSize: '60px',
    };

    const subHeader = {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'andale mono, monospace',
        fontSize: '20px',
        paddingBottom: '25px'
    }

    return(
        <div>
            <h1 style={headerStyle}>LOTUS LUCY</h1>
            <h2 style={subHeader}>Flowers can say it better</h2>
        </div>
    );
};

export default Header;