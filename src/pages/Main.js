import React from 'react'
import { styled } from 'styled-components'

const Content = styled.div`
background-color: ${(props) => props.theme.colors.Primary};
width: 100%;
height: 500px;
p{
  color: ${(props) => props.theme.colors.Secondary}
}
`


function Main() {
  return (
    <>
  <Content>
   <p>Lorem ipsum dolor sit amet.</p>
  </Content>
    </>
  )
}

export default Main