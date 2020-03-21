import React from 'react'
import styled from 'styled-components'

import { findUserImage } from 'utils/findUserImage'

const Game = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 150px;
`

export const Latest = ({ matches, players }) => {
    const slicedMatches = [...matches].reverse()
    return (
        <div>
            {slicedMatches &&
                slicedMatches.slice(0, 5).map(match => {
                    const winnerImage = findUserImage(match.winner, players)
                    const loserImage = findUserImage(match.loser, players)
                    return (
                        <Game>
                            <img
                                src={winnerImage}
                                style={{
                                    verticalAlign: 'middle',
                                    height: '2rem',
                                    width: '2rem',
                                    marginRight: '0.5rem',
                                }}
                            />
                            beat
                            <img
                                src={loserImage}
                                style={{ verticalAlign: 'middle', height: '2rem', width: '2rem', marginLeft: '0.5rem' }}
                            />
                        </Game>
                    )
                })}
        </div>
    )
}
