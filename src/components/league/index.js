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
        border-top: 1px solid #083c4d;
    }
`
const calculateHead2Head = (player, matches) => {
    const filteredMatches = matches.filter(match => player.name === match.winner)
    let obj = {}
    filteredMatches.forEach(match => {
        if (obj[match.loser]) {
            obj[match.loser] = obj[match.loser] += 1
        } else {
            obj[match.loser] = 1
        }
    })
    return obj
}

export const LeagueTable = ({ players, matches }) => {
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
            {players.map(player => (
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
                        <td>{((player.won / (player.won + player.lost)) * 100).toFixed(2)}%</td>
                    </tr>
                    {head2Head[player.name] ? (
                        <tr>
                            <td>players results will appear here...</td>
                            {console.log(calculateHead2Head(player, matches), 'calculating h2h')}
                        </tr>
                    ) : null}
                </>
            ))}
        </Table>
    )
}
