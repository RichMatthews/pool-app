import React, { useState } from 'react'
import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
    color: #eee;
    font-size: 14px;
    margin: auto;
    table-layout: fixed;
    text-align: center;
    width: 400px;
    & > tr > td {
        padding: 1rem;
        border-top: 1px solid #083c4d;
    }
`
const calculateHead2Head = (player, matches) => {
    const filteredMatches = matches.filter(match => player.name === match.winner)
    let obj = {}
    filteredMatches.forEach(match => {
        if (obj[match.loser]) {
            obj[match.loser] = {
                wins: (obj[match.loser].wins += 1),
                losses: findLossesAgainstPlayer(player, matches, match.loser),
            }
        } else {
            obj[match.loser] = {
                wins: 1,
                losses: findLossesAgainstPlayer(player, matches, match.loser),
            }
        }
    })
    return obj
}

const findLossesAgainstPlayer = (player, matches, opponent) => {
    const filteredMatches = matches.filter(match => player.name === match.loser)
    return filteredMatches.filter(match => match.winner === opponent).length
}

export const LeagueTable = ({ matches, seasonPlayers }) => {
    const head2HeadState = {
        rich: false,
        kieran: false,
        graeme: false,
        vitor: false,
        georgios: false,
    }
    const [head2Head, showHead2Head] = useState(head2HeadState)

    return (
        <Table>
            <tr>
                <th>PLAYER</th>
                <th>PLAYED</th>
                <th>WON</th>
                <th>WIN RATE</th>
            </tr>
            {seasonPlayers.map(player => (
                <>
                    <tr>
                        <td>
                            <img
                                src={player.image}
                                onClick={() =>
                                    showHead2Head({ ...head2HeadState, [player.name]: !head2Head[player.name] })
                                }
                            />
                        </td>
                        <td>{player.won + player.lost}</td>
                        <td>{player.won}</td>
                        <td>
                            {!isNaN((player.won / (player.won + player.lost)) * 100)
                                ? ((player.won / (player.won + player.lost)) * 100).toFixed(2)
                                : 0}
                            %
                        </td>
                    </tr>
                    {head2Head[player.name] ? (
                        <tr>
                            <table style={{ width: '400px' }}>
                                <th>Player</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                {matches ? (
                                    Object.keys(calculateHead2Head(player, matches)).map(key => (
                                        <tr>
                                            <td>{`${key}`}</td>
                                            <td>{`${calculateHead2Head(player, matches)[key].wins}`}</td>
                                            <td>{`${calculateHead2Head(player, matches)[key].losses}`}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <p>No matches recorded so far</p>
                                )}
                            </table>
                        </tr>
                    ) : null}
                </>
            ))}
        </Table>
    )
}
