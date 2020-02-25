import React from 'react'

import { findUserImage } from 'utils/findUserImage'

export const Latest = ({ matches, players }) => {
    const slicedMatches = [...matches].reverse()
    return (
        <div>
            {slicedMatches &&
                slicedMatches.slice(0, 3).map(match => {
                    const winnerImage = findUserImage(match.winner, players)
                    const loserImage = findUserImage(match.loser, players)
                    return (
                        <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                            <img src={winnerImage} style={{ verticalAlign: 'middle', height: '2rem', width: '2rem', marginRight: '0.5rem'}}/>
                            <span style={{ color: 'green' }}>{match.winner}</span>
                            <span style={{ color: '#fff', margin: '0.5rem 1rem'}}> vs </span>
                            <span style={{ color: 'red' }}>{match.loser}</span>
                            <img src={loserImage} style={{ verticalAlign: 'middle', height: '2rem', width: '2rem', marginLeft: '0.5rem'}}/>
                        </p>
                    )
                })}
        </div>
    )
}
