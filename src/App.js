import React from 'react';

import './App.css';

import Users from './components/Users';

import AppBar from './UI/AppBar';

function App() {
    return (
        <div className="App">
            <AppBar />
            <Users />
        </div>
    );
}

export default App;
