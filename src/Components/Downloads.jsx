import React        from 'react';

import PanelLabel   from './PanelLabel';


const Downloads = () => (
    <ul className="list-group">
        <li className="list-group-item">
            <span className="h3"><span className="fa fa-download color-twitch" /> &nbsp;Downloads</span>
        </li>

        <li className="individual-downloads-list-group-item list-group-item">
            <div className="downloads-row row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="row">
                        <div className="col-xs-12 text-center padding-bottom-10">
                            <PanelLabel>Windows</PanelLabel>
                        </div>

                        <div className="col-xs-12 text-center padding-bottom-10">
                            <img src="../../public/images/windows.png" alt="Windows" style={{paddingTop: '6px'}} />
                        </div>

                        <div className="col-xs-12 text-center">
                            <a href="https://github.com/twaddle/twaddle.github.io/releases/download/v1.0.0/twaddle-windows-x86.zip">32-bit</a>
                            <span> / </span>
                            <a href="https://github.com/twaddle/twaddle.github.io/releases/download/v1.0.0/twaddle-windows-x64.zip">64-bit</a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="row">
                        <div className="col-xs-12 text-center padding-bottom-10">
                            <PanelLabel>MacOS</PanelLabel>
                        </div>

                        <div className="col-xs-12 text-center padding-bottom-10">
                            <span className="fa fa-apple fa-5x" aria-hidden="true" />
                        </div>

                        <div className="col-xs-12 text-center">
                            <a href="https://github.com/twaddle/twaddle.github.io/releases/download/v1.0.0/twaddle-macOS-x64.zip">64-bit</a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="row">
                        <div className="col-xs-12 text-center padding-bottom-10">
                            <PanelLabel>Linux</PanelLabel>
                        </div>

                        <div className="col-xs-12 text-center padding-bottom-10">
                            <img src="../../public/images/linux.png" alt="Linux" style={{paddingTop: '6px'}} />
                        </div>

                        <div className="col-xs-12 text-center">
                            <a href="https://github.com/twaddle/twaddle.github.io/releases/download/v1.0.0/twaddle-linux-x86.zip">32-bit</a>
                            <span> / </span>
                            <a href="https://github.com/twaddle/twaddle.github.io/releases/download/v1.0.0/twaddle-linux-x64.zip">64-bit</a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="row">
                        <div className="col-xs-12 text-center padding-bottom-10">
                            <PanelLabel>Chrome</PanelLabel>
                        </div>

                        <div className="col-xs-12 text-center text-muted padding-bottom-10">
                            <span className="fa fa-chrome fa-5x" aria-hidden="true" />
                        </div>

                        <div className="col-xs-12 text-center">
                            Coming Soon...
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
);

Downloads.displayName = 'Downloads';

export default Downloads;
