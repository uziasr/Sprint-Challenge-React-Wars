import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

// export function CharacterList(){
// const [characterState, setCharacterState] = useState({})
// const [characterID, setCharacterID] = useState(1)
// const sampleRange = 10;
// useEffect(() =>
// {    axios
//     .get(`https://swapi.co/api/people/${characterID}/`)
//     .then(response => setCharacterState(response.data))
//     .catch(error=> console.log(error))
// },[])
// return(
//     <CharacterCard name={characterState.name} birth={characterState.birth_year} eye_color={characterState.eye_color} gender={characterState.gender} hair_color={characterState.hair_color}/>
//     // <h1>H</h1>
// )
// }
export function CharacterList(){
    const [characterState, setCharacterState] = useState([])
    const [characterPage, setCharacterPage] = useState(1)
    const [characterID, setCharacterID] = useState(1)
    const [nextStatus, setNextStatus] = useState(true)
    const [previousStatus, setPreviousStatus] = useState(false)
    const sampleRange = 10;
    console.log(`https://swapi.co/api/people/?page=${characterPage}`)
    useEffect(() =>
    {    axios
        .get(`https://swapi.co/api/people/?page=${characterPage}`)
        .then(response =>{ 
            console.log(response)
            setCharacterState(response.data.results)
            if(response.data.next){
                setNextStatus(true)
            }else{
                setNextStatus(false)
            }
            if(response.data.previous){
                setPreviousStatus(true)
            }else{
                setPreviousStatus(false)
            }
        })
        .catch(error=> console.log(error))
    },[characterPage])
    
    function viewNext(){
        if(nextStatus){
            setCharacterPage(characterPage+1)
        }
    }

    function viewPrevious(){
        if(previousStatus){
            setCharacterPage(characterPage-1)
        }
    }


    return(
        // <CharacterCard name={characterState.name} birth={characterState.birth_year} eye_color={characterState.eye_color} gender={characterState.gender} hair_color={characterState.hair_color}/>
        <div>
            <ContentWrapper>
                {characterState.map((character, ind)=>{
                    return(
                        <CharacterCard key={ind} name={character.name} birth={character.birth_year} eye_color={character.eye_color} gender={character.gender} hair_color={character.hair_color}/>
                    )   
                },)}
            </ContentWrapper>
            <div>
                <button onClick={()=>viewNext()}>Next</button>
                <button onClick={()=>viewPrevious()}>Previous</button>
            </div>
        </div>
        
    )
    }