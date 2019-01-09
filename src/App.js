import React, { Component } from 'react';
import styled from 'styled-components';
import data from './data.json';
import SearchBar from './components/searchbar';
import WasteItem from './components/wasteitem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: null,
            searchHitIndexes: [],
            favouritedItemIndexes: [],
            keywordMatches: null,
        };
        this.updateForm = this.updateForm.bind(this);
        this.search = this.search.bind(this);
        this.toggleFavourite = this.toggleFavourite.bind(this);
    }

    componentWillMount() {
        // place all the keywords in a hashmap for quick lookup
        const map = new Map();
        for (let i = 0; i < data.length; i++) {
            const keywords = data[i].keywords.split(' ');
            for (let j = 0; j < keywords.length; j++) {
                const originalMatches = map.get(keywords[j]);
                if (originalMatches === undefined) {
                    map.set(keywords[j], [i]);
                } else {
                    if (!originalMatches.includes(i)) {
                        originalMatches.push(i);
                        map.set(keywords[j], originalMatches);
                    }
                }
            }
        }
        this.setState(prevState => ({
            ...prevState,
            keywordMatches: map,
        }));
    }

    updateForm(event) {
        event.persist();
        this.setState(prevState => ({
            ...prevState,
            searchTerm: event.target.value,
            searchHitIndexes:
                event.target.value === '' ? [] : prevState.searchHitIndexes,
        }));
    }

    search() {
        const results = this.state.keywordMatches.get(this.state.searchTerm);
        if (results !== undefined) {
            this.setState(prevState => ({
                ...prevState,
                searchHitIndexes: results,
            }));
        }
    }

    toggleFavourite(itemIndex) {
        console.log(`toggle: ${itemIndex}`);
        let currentFavourites = this.state.favouritedItemIndexes;
        if (currentFavourites.includes(itemIndex)) {
            currentFavourites = currentFavourites.filter(
                value => value !== itemIndex
            );
        } else {
            currentFavourites.push(itemIndex);
        }
        this.setState(prevState => ({
            ...prevState,
            favouritedItemIndexes: currentFavourites,
        }));
    }

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
                <Content>
                    <div id="search-results">
                        <ul>
                            {this.state.searchHitIndexes.map((value, index) => (
                                <WasteItem
                                    favourited={this.state.favouritedItemIndexes.includes(
                                        value
                                    )}
                                    toggleFavourite={() =>
                                        this.toggleFavourite(value)
                                    }
                                    title={data[value].title}
                                    key={index}
                                    body={data[value].body}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Favourites</h3>
                        <ul id="favourites">
                            {this.state.favouritedItemIndexes.map(
                                (value, index) => (
                                    <WasteItem
                                        favourited={true}
                                        toggleFavourite={() =>
                                            this.toggleFavourite(value)
                                        }
                                        title={data[value].title}
                                        key={index}
                                        body={data[value].body}
                                    />
                                )
                            )}
                        </ul>
                    </div>
                </Content>
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

const Content = styled.div`
    margin: 10px;
`;

export default App;
