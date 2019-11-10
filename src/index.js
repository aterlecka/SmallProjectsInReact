import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Clock timeZone="Europe/Warsaw" city="Warsaw"/>
        <Clock timeZone="America/New_York" city="New York"/>
        <Clock timeZone="Europe/London" city="London"/>
    </div>,
    document.getElementById('root')
);
serviceWorker.unregister();


