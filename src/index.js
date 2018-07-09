import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Preloader from './preloader';
import superagent from 'superagent';

ReactDOM.render(<Preloader/>, document.querySelector('#root'));
debugger;

superagent.get('data.json').end( (err, res) => {
    if(!err){
        ReactDOM.render(<App appData={res.body} />, document.querySelector('#root'));
        registerServiceWorker();
    }else{
        console.warn('Something went wrong!', err);
    }
});
