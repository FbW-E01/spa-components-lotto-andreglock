import React from 'react';

export default class Header extends React.Component {
    render() {
        return <header>
            <h1 data-testid="header-one">Lotto 6/49</h1>
            <h3 data-testid="header-three">Generating lucky numbers</h3>
        </header>
    }
}