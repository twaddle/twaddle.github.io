import React from 'react';


const PanelLabel = ({children}) => (
    <div className="panel-label panel panel-twitch">
        <div className="panel-body text-center">
            <strong className="color-twitch">{children}</strong>
        </div>
    </div>
);

PanelLabel.displayName = 'PanelLabel';

PanelLabel.propTypes = {
    children: React.PropTypes.string.isRequired
};

export default PanelLabel;
