import React from "react";
import styled from 'styled-components';

const Frame = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  margin: auto;
  width: 50%;
  border: black 3px solid;
`

function Image(props) {
    const { nasaInfo } = props

    return (
        <Frame>
            <img src={nasaInfo.url} alt="nasa item of the day" width="100%"/>
        </Frame>
    )
}

export default Image;