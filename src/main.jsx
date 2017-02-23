import React        from 'react';
import ReactDOM     from 'react-dom';

import Credits      from './Components/Credits';
import Description  from './Components/Description';
import Downloads    from './Components/Downloads';
import Header       from './Components/Header';

import './stylesheet.less';

const App = (
    <div className="container">
        <div className="wrap">
            <Header />

            <hr />

            <Description />

            <br /><br />

            <Downloads />

            <br /><br />
        </div>

        <footer className="footer">
            <hr />

            <span>
                <span>To view upcoming features, offer suggestions, report bugs, and give general feedback please </span>
                <a href="https://github.com/twaddle/twaddle.github.io/issues">visit the Github issues page</a>.
            </span>

            <br /><br />

            <Credits />
        </footer>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));
