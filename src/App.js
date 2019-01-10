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
            const keywords = data[i].keywords.split(',');
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

    search(event) {
        event.preventDefault();
        let results = [];
        const searchTerm = this.state.searchTerm;
        for (const [keyword, indeces] of this.state.keywordMatches.entries()) {
            if (keyword.includes(searchTerm)) {
                console.log(keyword);
                for (let i = 0; i < indeces.length; i++) {
                    if (!results.includes(indeces[i])) {
                        results.push(indeces[i]);
                    }
                }
            }
        }
        if (results.length !== 0) {
            this.setState(prevState => ({
                ...prevState,
                searchHitIndexes: results,
            }));
        }
    }

    toggleFavourite(itemIndex) {
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
                    <div id="favourites">
                        <h2>Favourites</h2>
                        <ul>
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
    margin-top: 10px;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, #1f5084, #278553);
    color: white;
`;

const Content = styled.div`
    #favourites,
    #search-results {
        padding: 10px;
    }

    #favourites {
        background-color: #f7fefa;
        h2 {
            color: #2b985e;
            margin-bottom: 15px;
        }

        min-height: 200px;
    }
`;

export default App;
