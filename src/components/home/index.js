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

// For each unique player?
// Loop over matches?
// Did I play?
// Who was it against?
// Did I win?

// {
//   "head-to-head-wins": [
//     "rich": {
//       "kieran": 1,
//       "vitor": 3,
//       "graeme": 2
//     },
//     "kieran": {
//       "rich": 2,
//       "vitor": 1
//     }
//   ]
// }

// How do I see my win rate against x player
// For each player
// Get key and value
// Key = opponent name
// Find opponent name in object
// Get value

// return "Rich: head-to-head-wins["rich"]["kieran"] : ["kieran"]["rich"] Kieran"
// Rich 5 : 2 Kieran
// Rich 2 : 1 vitor
// ...
// Kieran 3: 0 vitor

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
