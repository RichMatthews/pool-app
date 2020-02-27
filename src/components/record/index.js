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
    text-align: center;
`

const customStyles = {
    container: (base, state) => ({
        ...base,
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        width: '100%',
    }),
}

export const Record = ({ submitResult }) => {
    const [winner, setWinner] = useState('')
    const [loser, setLoser] = useState('')

    return (
        <Container>
            <p style={{ color: '#fff' }}> Enter new result </p>
            <div>
                <Select styles={customStyles} options={options} placeholder="winner" onChange={val => setWinner(val)} />
            </div>
            <div>
                <Select styles={customStyles} options={options} placeholder="loser" onChange={val => setLoser(val)} />
            </div>
            <button
                disabled={winner.value === loser.value || winner === '' || loser === ''}
                onClick={() => submitResult(winner.value, loser.value)}
                style={{
                    background: "linear-gradient(90deg, #64c899 0%,#10cb75 100%)",
                    border: 'none',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginTop: '1rem',
                    marginBottom: '10px',
                    height: '60px',
                    width: '305px',
                    cursor: 'pointer'
                }}
            >
                Submit Result
            </button>
        </Container>
    )
}
