import React from 'react';
import styled from 'styled-components';
import Icon from './icon';

const SearchBar = ({ updateForm, clickHandler }) => (
    <Wrapper>
        <input type="text" onChange={updateForm} name="search-bar" />
        <button onClick={clickHandler}>
            <Icon fontSize={18} icon="search" color="white" />
        </button>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;

    button {
        width: 40px;
        height: 40px;
        background-color: green;
        color: white;
        border: none;
        border-radius: 2px;
    }

    input {
        flex-grow: 1;
        height: 40px;
        border: 1px solid gray;
        margin-right: 10px;
        padding-left: 10px;
        font-size: 16px;
        border-radius: 2px;
    }
`;

export default SearchBar;
