import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Container = styled.div`
    background: #282828;
    display: flex;
    flex-direction: column;
    width: 400px;
    z-index: 1000000;
    padding: 5px;
    transition: 0.3s;
    margin-left: ${({ menuHidden }) => (menuHidden ? '-410px' : 0)};
`

const StyledLink = styled(Link)`
    margin-bottom: 20px;
    color: #787878;
    text-decoration: none;
    border-bottom: 1px solid #787878;
`

export const Nav = ({ toggleMenu, menuHidden }) => {
    return (
        <Container onClick={() => toggleMenu(!menuHidden)} menuHidden={menuHidden}>
            <StyledLink to="">Home</StyledLink>
            <StyledLink to="league-table">League Table</StyledLink>
            <StyledLink to="record">Record match</StyledLink>
            <StyledLink to="seasons">Past Seasons</StyledLink>
        </Container>
    )
}
