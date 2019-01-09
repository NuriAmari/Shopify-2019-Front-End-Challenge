import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

function htmlDecode(body) {
    const element = new DOMParser().parseFromString(body, 'text/html');
    return ReactHtmlParser(element.documentElement.textContent);
}

const WasteItem = ({ favourited, title, body }) => (
    <Wrapper>
        <div>
            {favourited && <p>star</p>}
            {title}
        </div>
        <div>{htmlDecode(body)}</div>
    </Wrapper>
);

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

export default WasteItem;
