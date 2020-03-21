import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate, Router } from '@reach/router'
import moment from 'moment'

import { firebaseApp } from '../../config'
import { Home } from 'components/home'
import { Record } from 'components/record'
import { LeagueTable } from 'components/league'
import { Login } from 'components/login'
import { Nav } from 'components/nav'
import { Seasons } from 'components/seasons'

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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const InnerContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const CURRENT_SEASON = 1

export const Main = () => {
    const [matches, setMatches] = useState([])
    const [seasonPlayers, setSeasonPlayers] = useState([])
    const [menuHidden, toggleMenu] = useState(true)

    useEffect(() => {
        const getCurrentSeasonMatches = firebaseApp.database().ref(`/seasons/${CURRENT_SEASON}/matches`)
        const getCurrentSeasonPlayers = firebaseApp.database().ref(`/seasons/${CURRENT_SEASON}/players`)

        async function fetchData() {
            await getCurrentSeasonMatches.once('value', snapshot => {
                if (snapshot.val()) {
                    setMatches(snapshot.val())
                }
            })
            await getCurrentSeasonPlayers.once('value', snapshot => {
                if (snapshot.val()) {
                    setSeasonPlayers(snapshot.val())
                }
            })
        }

        fetchData()
    }, [])

    const submitResultToFirebase = updatedPlayers => {
        firebaseApp
            .database()
            .ref(`/seasons/${CURRENT_SEASON}/players`)
            .set(updatedPlayers)
    }

    const submitNewMatchToFirebase = match => {
        const updatedMatches = [...matches, match]

        firebaseApp
            .database()
            .ref(`/seasons/${CURRENT_SEASON}/matches`)
            .set(updatedMatches)
    }

    const redirectToTable = () => {
        return navigate('/league-table')
    }

    const sendToSlack = (winner, loser) => {
        const message = `${winner} just beat ${loser}`
        const channel = 'pool-world-champs'
    }

    const submitResult = async (winner, loser) => {
        const updatedPlayers = seasonPlayers
        const updateWinner = updatedPlayers.find(player => player.name === winner)
        const updateLoser = updatedPlayers.find(player => player.name === loser)
        updateWinner.won = updateWinner.won += 1
        updateLoser.lost = updateLoser.lost += 1

        await submitResultToFirebase(updatedPlayers)

        const match = {
            winner,
            loser,
            id: matches.length,
            date: moment(Date.now()).format('DD/MM/YYYY'),
        }

        await submitNewMatchToFirebase(match)

        await sendToSlack(winner, loser)

        redirectToTable()
    }

    return (
        <Container>
            <Nav menuHidden={menuHidden} toggleMenu={toggleMenu} />
            <InnerContainer>
                <div>
                    <p
                        style={{ color: '#fff', position: 'fixed', left: 0, marginLeft: '25px', cursor: 'pointer' }}
                        onClick={() => toggleMenu(!menuHidden)}
                    >
                        Menu
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <H1> Pool </H1>
                    </div>
                    <H6> Championships </H6>
                </div>
                <Router>
                    <Home path="/" matches={matches} seasonPlayers={seasonPlayers} />
                    <Record path="/record" component={Record} submitResult={submitResult} />
                    <LeagueTable
                        path="/league-table"
                        matches={matches}
                        seasonPlayers={seasonPlayers}
                        seasonPlayers={seasonPlayers}
                    />
                    <Login path="/login" />
                    <Seasons path="/seasons" />
                </Router>
            </InnerContainer>
        </Container>
    )
}
