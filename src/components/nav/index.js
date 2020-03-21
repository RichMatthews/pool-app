import React from 'react'
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

const LinkContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    padding-left: 5px;
`
const StyledLink = styled(Link)`
    align-items: center;
    border-bottom: 1px solid #787878;
    color: #787878;
    display: flex;
    margin-bottom: 20px;
    text-decoration: none;
    width: 100%;
`
const Image = styled.img`
    height: 30px;
    width: 30px;
`

export const Nav = ({ toggleMenu, menuHidden }) => {
    return (
        <Container onClick={() => toggleMenu(!menuHidden)} menuHidden={menuHidden}>
            <LinkContainer>
                <StyledLink to="">
                    <Image src={'/images/home.svg'} />
                    <p style={{ marginLeft: '10px' }}>Home</p>
                </StyledLink>
            </LinkContainer>
            <LinkContainer>
                <StyledLink to="league-table">
                    <Image src={'/images/record.svg'} />
                    <p style={{ marginLeft: '10px' }}>League Table</p>
                </StyledLink>
            </LinkContainer>
            <LinkContainer>
                <StyledLink to="record">
                    <Image src={'/images/record.svg'} />
                    <p style={{ marginLeft: '10px' }}>Record Match</p>
                </StyledLink>
            </LinkContainer>
            <LinkContainer>
                <StyledLink to="seasons">
                    <Image src={'/images/past.svg'} />
                    <p style={{ marginLeft: '10px' }}>Past Seasons</p>
                </StyledLink>
            </LinkContainer>
        </Container>
    )
}
