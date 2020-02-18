import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.div`
    transition: 1s;
    background: #34608a;
    padding: 5px;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    margin-left: ${({ menuHidden }) => (menuHidden ? '-110px' : 0)};
    z-index: 1000000;
`

const StyledLink = styled(Link)`
    margin-bottom: 20px;
    color: #fff;
    text-decoration: none;
`

export const Nav = ({ toggleMenu, menuHidden }) => {
    return (
        <Container onClick={() => toggleMenu(!menuHidden)} menuHidden={menuHidden}>
            <StyledLink to="">Home</StyledLink>
            <StyledLink to="league-table">League Table</StyledLink>
            <StyledLink to="record">Record match</StyledLink>
        </Container>
    )
}
