import React from 'react'

import { findUserImage } from 'utils/findUserImage'

export const Latest = ({ matches, players }) => {
    const slicedMatches = [...matches].reverse()
    console.log(slicedMatches.slice(0, 3))
    return (
        <div>
            {slicedMatches &&
                slicedMatches.slice(0, 3).map(match => {
                    const winnerImage = findUserImage(match.winner, players)
                    const loserImage = findUserImage(match.loser, players)
                    return (
                        <p>
                            <img src={winnerImage} />
                            <span style={{ color: 'green' }}>{match.winner}</span>
                            <span style={{ color: '#fff' }}> vs </span>
                            <span style={{ color: 'red' }}>{match.loser}</span>
                            <img src={loserImage} />
                        </p>
                    )
                })}
        </div>
    )
}
