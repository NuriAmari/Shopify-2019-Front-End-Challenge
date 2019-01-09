import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import Icon from './icon';

function htmlDecode(body) {
    const element = new DOMParser().parseFromString(body, 'text/html');
    return ReactHtmlParser(element.documentElement.textContent);
}

const WasteItem = ({ favourited, toggleFavourite, title, body }) => (
    <Wrapper>
        <div>
            <div className="icon-wrapper" onClick={toggleFavourite}>
                <Icon
                    color={favourited ? 'green' : 'gray'}
                    icon="star"
                    fontSize={11}
                />
            </div>
            {title}
        </div>
        <div>{htmlDecode(body)}</div>
    </Wrapper>
);

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    margin-bottom: 15px;

    .icon-wrapper {
        display: inline;
        padding: 5px;
    }

    font-size: 14px;
`;

export default WasteItem;
