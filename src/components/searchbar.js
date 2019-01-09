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

    button {
        width: 30px;
        height: 30px;
    }

    input {
        flex-grow: 1;
        height: 30px;
    }
`;

export default SearchBar;
