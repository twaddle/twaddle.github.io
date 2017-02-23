import React from 'react';


const Credits = () => (
    <div>
        <ul className="list-group credits" style={{marginBottom: '.5em'}}>
            <a href="http://getbootstrap.com/" className="list-group-item">
                <span>
                    <strong className="color-twitch">Bootstrap Framework</strong>
                    <span className="pull-right badge">Twitter</span>
                </span>
            </a>
            <a href="https://facebook.github.io/react/" className="list-group-item">
                <span>
                    <strong className="color-twitch">React JS Library</strong>
                    <span className="pull-right badge">Facebook</span>
                </span>
            </a>
            <a href="http://fontawesome.io/" className="list-group-item">
                <span>
                    <strong className="color-twitch">Font Awesome Icons</strong>
                    <span className="pull-right badge">Dave Gandy</span>
                </span>
            </a>
        </ul>

        <div className="text-right">
            <small>
                <span>
                    &#34;
                    <a href="https://www.iconfinder.com/icons/317717/operating_system_windows_icon">
                        Operating System, Windows Icon
                    </a>
                    &#34;
                </span>
                <span> by </span>
                <a href="https://www.iconfinder.com/zlaten">
                    Zlatko Najdenovski
                </a>
                <span> is licensed under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a></span>
            </small>

            <br />

            <small>
                <span>
                    &#34;
                    <a href="https://www.iconfinder.com/icons/8817/penguin_tux_icon">
                        Penguin, Tux Icon
                    </a>
                    &#34;
                </span>
                <span> by </span>
                <a href="http://www.oxygen-icons.org/">
                    Oxygen Team
                </a>
                <span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/2.5/">CC BY-NC-ND 2.5</a></span>
            </small>
        </div>

    </div>
);

Credits.displayName = 'Credits';

export default Credits;
