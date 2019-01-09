import React, { Component } from 'react';
import styled from 'styled-components';
import * as data from './data.json';
import SearchBar from './components/searchbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: null,
            favouritedItemIndexes: [],
        };
        this.updateForm = this.updateForm.bind(this);
    }

    updateForm(event) {
        this.setState(prevState => ({
            ...prevState,
            searchTerm: event.target.value,
        }));
    }

    search() {}

    render() {
        return (
            <div className="App">
                <Header className="App">
                    <h2>Toronto Waste Lookup</h2>
                </Header>
                <SearchBar
                    clickHandler={this.search}
                    updateForm={this.updateForm}
                />
                <div>
                    <h3>Favourites</h3>
                    <ul id="favourites">//</ul>
                </div>
            </div>
        );
    }
}

const Header = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: white;
`;

export default App;
