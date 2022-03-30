import React from 'react'
import { NextPage } from 'next'

import styled, { keyframes } from 'styled-components'

interface Props {
  classTitle?: string
}

const Title: NextPage<Props> = (props) => {
  return (
    <div>
      <h1 className={props.classTitle}>
        {' '}
        et je suis
        <Wrapper className="text-5xl font-bold text-green-600">
          {' '}
          developpeur web
        </Wrapper>
      </h1>
    </div>
  )
}

export default Title

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
