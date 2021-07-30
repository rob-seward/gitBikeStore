import React from 'react';
import styled from 'styled-components';
import { QuestionPopUp } from '../components/QuestionPopUp';
import SEO from '../components/SEO';

const ContactSpacer = styled.div`
>div {
    min-height: 80vh;
}
`;

export default function Contact() {
    return (
        <>
        <SEO title="Contact"/>
        <ContactSpacer>
            <div></div>
        <QuestionPopUp />
        </ContactSpacer>
        </>
    );
}