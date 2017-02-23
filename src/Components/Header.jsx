import React from 'react';


const Header = () => (
    <div className="row">
        <div className="col-xs-6">
            <div className="h2">
                <span className="label label-twitch">Twaddle</span>
            </div>
        </div>
        <div className="col-xs-6 text-right">
            <div className="h3">
                <span className="label label-default">v1.0.0</span>
            </div>
        </div>
    </div>
);

Header.displayName = 'Header';

export default Header;
