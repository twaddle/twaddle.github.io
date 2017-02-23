import React from 'react';


const Header = () => (
    <div className="header-row row">
        <div className="col-xs-12">
            <h1>
                <span className="label label-twitch">Twaddle</span>
            </h1>
        </div>
        <div className="h3 float-right col-xs-12 text-right">
            Latest Version:
            <br className="visible-xs-block" />
            <span className="label label-default margin-left-10">1.0.0</span>
        </div>
    </div>
);

Header.displayName = 'Header';

export default Header;
