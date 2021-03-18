import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
    background-color: lightgray;
    font-size: 1.5rem;
    color: darkblue;
    width: 50%;
    margin: auto;
    border: black 3px solid;
`;

function Header(props) {
    const { nasaInfo } = props
    return (
        <Wrapper>
            <h1>Nasa Photo of the Day<br></br>{nasaInfo.date}</h1>
        </Wrapper>
    )
}

export default Header;