import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate, Redirect, Router } from '@reach/router'
import moment from 'moment'
import firebase from 'firebase'

import { firebaseApp } from '../../config'
import { Home } from 'components/home'
import { Record } from 'components/record'
import { LeagueTable } from 'components/league'
import { Login } from 'components/login'
import { Nav } from 'components/nav'

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

const isUserSignedIn = () => {}

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // firebaseApp.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         return <Component {...rest} />
    //     } else {
    //         return <Redirect from="" to="/login" noThrow />
    //     }
    // })
    const Auth = false
}

const authenticateUser = async () => {
    const email = 'richjmatt26@gmail.com'
    const password = 'test1234'
    await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
}

export const Main = () => {
    const [players, setPlayers] = useState([])
    const [matches, setMatches] = useState([])
    const [menuHidden, toggleMenu] = useState(true)

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
        <Container>
            <Nav menuHidden={menuHidden} toggleMenu={toggleMenu} />
            <InnerContainer>
                <div>
                    <div>
                        <p
                            style={{ color: '#fff', position: 'fixed', left: 0, marginLeft: '25px' }}
                            onClick={() => toggleMenu(!menuHidden)}
                        >
                            Menu
                        </p>
                        <H1> Pool </H1>
                    </div>
                    <H6> Championships </H6>
                </div>
                <Router>
                    <Home path="/" matches={matches} players={players} />
                    <Record path="/record" component={Record} submitResult={submitResult} />
                    <LeagueTable path="/league-table" matches={matches} players={players} />
                    <Login path="/login" />
                </Router>
            </InnerContainer>
        </Container>
    )
}
