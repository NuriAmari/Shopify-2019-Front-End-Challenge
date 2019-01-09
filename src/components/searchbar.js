import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ updateForm, clickHandler }) => (
    <Wrapper>
        <input type="text" onChange={updateForm} name="search-bar" />
        <button onClick={clickHandler}>S</button>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;

    button {
        width: 30px;
        height: 30px;
        background-color: green;
        color: white;
    }

    input {
        flex-grow: 1;
        height: 30px;
        border: 1px solid #black;
        margin-right: 10px;
        padding-left: 5px;
    }
`;

export default SearchBar;
