import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justifycontent: center;
`

const ImageContainer = styled.div`
    display: flex;
`

const Game = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 150px;
`

export const Seasons = ({ matches, players }) => {
    return (
        <Container>
            <h2>Season One</h2>
            <h3>January 2020 - March 2020</h3>
            <h3 style={{ color: 'gold' }}> Champion - Rich</h3>
            <h3 style={{ color: 'silver' }}> Runner up - Kieran</h3>
            <h3 style={{ color: '#cd7f32' }}> 3rd place - Vitor</h3>
            <h4>Final</h4>
            <Game>
                <img src={'/images/rich.svg'} />
                3:1
                <img src={'/images/kieran.svg'} />
            </Game>
            <h4>Semi Finals</h4>
            <Game style={{ marginBottom: '10px' }}>
                <img src={'/images/rich.svg'} />
                2:0
                <img src={'/images/georgios.svg'} />
            </Game>
            <Game>
                <img src={'/images/kieran.svg'} />
                2:1
                <img src={'/images/vitor.svg'} />
            </Game>
        </Container>
    )
}
