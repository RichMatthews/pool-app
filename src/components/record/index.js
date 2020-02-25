import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const options = [
    { value: 'Rich', label: 'Rich' },
    { value: 'Vitor', label: 'Vitor' },
    { value: 'Kieran', label: 'Kieran' },
    { value: 'Graeme', label: 'Graeme' },
    { value: 'Georgios', label: 'Georgios' },
]

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const customStyles = {
    container: (base, state) => ({
        ...base,
        marginBottom: '20px',
    }),
}

export const Record = ({ submitResult }) => {
    const [winner, setWinner] = useState('')
    const [loser, setLoser] = useState('')

    return (
        <Container>
            <p style={{ color: '#fff' }}> Enter new result </p>
            <div style={{ width: '150px' }}>
                <Select styles={customStyles} options={options} placeholder="winner" onChange={val => setWinner(val)} />
            </div>
            <div style={{ width: '150px' }}>
                <Select styles={customStyles} options={options} placeholder="loser" onChange={val => setLoser(val)} />
            </div>
            <button
                disabled={winner.value === loser.value || winner === '' || loser === ''}
                onClick={() => submitResult(winner.value, loser.value)}
            >
                Submit Result
            </button>
        </Container>
    )
}
