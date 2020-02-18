import React from 'react'
import styled from 'styled-components'

import { Link } from '@reach/router'
import { Latest } from 'components/latest'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justifycontent: center;
`

export const Home = ({ matches, players }) => {
    return (
        <Container>
            <div>
                <ButtonContainer>
                    <button
                        style={{
                            backgroundColor: '#64C899',
                            border: 'none',
                            color: '#fff',
                            borderRadius: '8px',
                            fontSize: '18px',
                            marginBottom: '10px',
                            height: '60px',
                            width: '305px',
                        }}
                    >
                        <Link to="record">Record new game</Link>
                    </button>
                    <button
                        style={{
                            backgroundColor: '#C8C464',
                            border: 'none',
                            color: '#fff',
                            borderRadius: '8px',
                            fontSize: '18px',
                            marginBottom: '10px',
                            height: '60px',
                            width: '305px',
                        }}
                    >
                        <Link to="league-table">View League Table</Link>
                    </button>

                    <p style={{ color: '#fff' }}>LATEST RESULTS</p>
                    <Latest matches={matches} players={players} />
                </ButtonContainer>
            </div>
        </Container>
    )
}
