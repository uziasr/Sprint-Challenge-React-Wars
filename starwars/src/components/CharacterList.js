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
const Button = styled.button`
    margin: 4%;
    padding: 2% 3%;
    color: yellow;
    background: black;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: black 1px solid;
    ${({ active }) => active && `
    display:none;
  `}

`
export function CharacterList(){
    const [characterState, setCharacterState] = useState([])
    const [characterPage, setCharacterPage] = useState(1)
    // const [characterID, setCharacterID] = useState(1)
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
        <div>
            <ContentWrapper>
                {characterState.map((character, ind)=>{
                    return(
                        <CharacterCard key={ind} name={character.name} birth={character.birth_year} eye_color={character.eye_color} gender={character.gender} hair_color={character.hair_color}/>
                    )   
                },)}
            </ContentWrapper>
            <div>
                <Button active={!previousStatus} onClick={()=>viewPrevious()}>Previous</Button>
                <Button active={!nextStatus} onClick={()=>viewNext()}>Next</Button>
            </div>
        </div>
        
    )
    }