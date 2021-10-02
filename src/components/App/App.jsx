import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './../../resources/logo.png';

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <div className="app-left">
                    <h1 className="app-title">AUTOMATION REPORTS</h1>
                </div>
                <div className="app-right">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>

        )
    }
}

export default App;
