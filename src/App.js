import React from 'react';

import Header from './components/Header';

function App() {
    return (
    <>
        <Header title="Homepage">
            <ul>
                <li>Homepage</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
        </Header>
        <Header title="Projects"> 
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </Header>
    </> 
    );
}

export default App;
