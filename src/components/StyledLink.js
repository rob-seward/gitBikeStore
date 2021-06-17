import React from 'react';
import styled from 'styled-components';
import {Link as GatsbyLink} from 'gatsby';


const Link=({to, className, children}) => {
    return (
        <GatsbyLink to={to} className={className} >
            {children}
        </GatsbyLink>
    );
};

export const StyledLink = styled(Link)``;