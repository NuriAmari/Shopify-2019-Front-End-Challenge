import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, color, fontSize }) => {
    const StyledIcon = styled(FontAwesomeIcon)`
        color: ${color};
        font-size: ${fontSize}px;
        vertical-align: top;
    `;

    return <StyledIcon icon={icon} />;
};

export default Icon;
