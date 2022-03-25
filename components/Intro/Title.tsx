import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Title() {
  return (
    <Wrapper className="text-5xl font-bold text-green-600">
      {' '}
      Web Developer
    </Wrapper>
  )
}

const animation = keyframes`
    0% { opacity: 0; }
    25% { opacity: 1; }
    75% { opacity: 1; }
    100% { opacity: 0; }
`

const Wrapper = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`
