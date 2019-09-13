import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    background: black;
    color:whitesmoke;
    width: 30%;
    margin: 4%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 

`
const NameSpace = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    color:yellow;
`

export default function CharacterCard(props){
    return (
    <CardWrapper>
        <NameSpace>
            <h2>{props.name}</h2>
            <p>Born: {props.birth}</p>
        </NameSpace>
        <div>
            <p>Hello, my name is {props.name}, I have {props.eye_color} colored eyes. I am a {props.gender} wtih {props.hair_color} hair</p>
        </div>
    </CardWrapper>
)}