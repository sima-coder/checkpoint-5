import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './style.css';

const Main = () => {
    return(
        <>
        <div id="content">
            <ProfilePhoto />
            <div>
                <FullName />
                <Address />
            </div>  
        </div>
        </>
    );
}
ReactDOM.render(Main, document.getElementById('root'));
export default Main;