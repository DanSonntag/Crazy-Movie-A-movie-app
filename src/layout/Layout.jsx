import React, { Children } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

function Layout({children}) {
  return (
    <Wrapper>
        <Navbar/>
        <div className="movies">
            {children}
        </div>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .movies {
        width: 100%;
        height: calc(100vh - 60px);
        background: #353535d3;
    }
`