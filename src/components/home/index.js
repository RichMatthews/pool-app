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

export const Home = ({ matches, seasonPlayers }) => {
    return (
        <Container>
            <div>
                <ButtonContainer>
                    <Link to="record">
                        <button
                            style={{
                                background: 'linear-gradient(90deg, #64c899 0%,#10cb75 100%)',
                                border: 'none',
                                color: '#fff',
                                borderRadius: '8px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                marginBottom: '10px',
                                height: '60px',
                                width: '305px',
                                cursor: 'pointer',
                            }}
                        >
                            Record new game
                        </button>
                    </Link>
                    <Link to="league-table">
                        <button
                            style={{
                                background: 'linear-gradient(90deg, #FEF637 0%,#E28A06 100%)',
                                border: 'none',
                                color: '#fff',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginTop: '1rem',
                                marginBottom: '10px',
                                height: '60px',
                                width: '305px',
                                cursor: 'pointer',
                            }}
                        >
                            View League Table
                        </button>
                    </Link>

                    <h3 style={{ color: '#fff', marginTop: '3rem' }}>LATEST RESULTS</h3>
                    <Latest matches={matches} seasonPlayers={seasonPlayers} />
                </ButtonContainer>
            </div>
        </Container>
    )
}
