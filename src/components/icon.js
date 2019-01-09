import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, color, fontSize }) => {
    const StyledIcon = styled(FontAwesomeIcon)`
        color: ${color};
        font-size: 10px;
    `;

    return <StyledIcon icon="star" />;
};

export default Icon;
