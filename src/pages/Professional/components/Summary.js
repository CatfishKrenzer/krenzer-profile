import React, { useEffect, useState } from "react";
import { FlexColumnDiv, FlexRowCenteredDiv } from "../../../styles";
import{SummaryContainer} from './SummaryStyles';
import axios from 'axios';

const Summary = (props) => {
    const [error, setError]= useState();
    const [profile, setProfile]= useState();

    useEffect(()=>{
        //On load, read in the linkedin html
        axios.get('https://www.linkedin.com/in/johnkrenzer', {
            headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }}).then(data =>{
            setProfile(data)
        }).catch(e =>{
            setError('Error Occurred Reading Profile')
            console.log(e)
        })
    },[])

  return (
    <>
    <SummaryContainer theme={props.theme}>
      <FlexColumnDiv>
        {error ? <h2>{error}</h2>:
        <h1>Hello</h1>
        }
        
      </FlexColumnDiv>
    </SummaryContainer>
    </>
  )
}

export default Summary;