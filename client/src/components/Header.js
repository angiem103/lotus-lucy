import React, { useContext } from 'react';
import { LoginContext } from './App';


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

    const h3 = {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'andale mono, monospace',
        fontSize: '15px',
        paddingBottom: '25px'

    }

    const {currentUser} = useContext(LoginContext)

    console.log(currentUser)

    return(
        <div>
            <h1 style={headerStyle}>LOTUS LUCY</h1>
            <h2 style={subHeader}>Flowers can say it better</h2>
            {currentUser ? <h3 style={h3}>Hello {currentUser.name.split(' ')[0]}!</h3> : null }
        </div>
    );
};

export default Header;