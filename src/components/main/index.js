import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate, Router } from '@reach/router'
import moment from 'moment'
import { firebaseApp } from '../../config'
import { Home } from 'components/home'
import { Record } from 'components/record'
import { LeagueTable } from 'components/league'
import { Latest } from 'components/latest'

const H1 = styled.h1`
    color: #fff;
    text-align: center;
    margin: 0;
`

const H6 = styled.h6`
    color: #fff;
    text-align: center;
    margin: 0;
    margin-bottom: 25px;
`

export const Main = () => {
    const [players, setPlayers] = useState([])
    const [matches, setMatches] = useState([])

    useEffect(() => {
        const playersRef = firebaseApp.database().ref('/players')
        const matchesRef = firebaseApp.database().ref('/matches')

        async function fetchData() {
            await playersRef.once('value', snapshot => {
                setPlayers(snapshot.val())
            })
            await matchesRef.once('value', snapshot => {
                setMatches(snapshot.val())
            })
        }

        fetchData()
    }, [])

    const submitResultToFirebase = updatedPlayers => {
        firebaseApp
            .database()
            .ref('/players')
            .set(updatedPlayers)
    }

    const submitNewMatchToFirebase = match => {
        const updatedMatches = [...matches, match]

        firebaseApp
            .database()
            .ref('/matches')
            .set(updatedMatches)
    }

    const redirectToTable = () => {
        return navigate('/league-table')
    }

    const submitResult = (winner, loser) => {
        const updatedPlayers = players
        const updateWinner = updatedPlayers.find(player => player.name === winner)
        const updateLoser = updatedPlayers.find(player => player.name === loser)
        updateWinner.won = updateWinner.won += 1
        updateLoser.lost = updateLoser.lost += 1

        submitResultToFirebase(updatedPlayers)

        const match = {
            winner,
            loser,
            id: matches.length,
            date: moment(Date.now()).format('DD/MM/YYYY'),
        }

        submitNewMatchToFirebase(match)

        redirectToTable()
    }

    return (
        <div>
            <H1> Pool </H1>
            <H6> Championships </H6>
            <Router>
                <Home path="/" matches={matches} players={players} />
                <Record path="/record" submitResult={submitResult} />
                <LeagueTable path="/league-table" matches={matches} players={players} />
            </Router>
        </div>
    )
}
