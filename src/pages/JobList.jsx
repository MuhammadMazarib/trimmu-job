import React, { useState } from 'react'
import { useCharacters } from '../hooks/useJobs';

import "./JobList.css"
import Card from './cards';

const MyName = " Muhammad Mazarib";
const CurrentYear = new Date().getFullYear();

function createCard(props) {
  return (
    <Card
      title= {props.title}
      isPublished={props.isPublished}
      name={props.company.name}
      userEmail={props.userEmail}
      applyUrl={props.applyUrl}
      description={props.description}

    />
  );
}

export default function CharactersList() {
  
    const {error,data,loading}=useCharacters();
    //initializing data 
    //let var1=data.jobs

    const [searchTerm, setSearchTerm]=useState('');
    console.log(data)
    if(loading) return<div className='loading'>Loading...</div>
    if(error) return<div>errrrr</div>
   

    return (
      <>
      <div className='padmarg'>
      <header className="header">
      <div className="overlay">
    <h1>Trimu Labs</h1>
    <h5>Job Portal</h5>

        <input type="text" placeholder="Search..." className="prompt" onChange={event=>{setSearchTerm(event.target.value)}} />     
    

        </div>
    </header>
      <div className='CharacterList'>



    
    
 {data.jobs?.filter(job => job.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) || job.company?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))?.map(createCard)}
    
 
         
          
      </div>
      </div>
      <div className="App">
      <p id='copyright'>Created by {MyName}  &#169; {CurrentYear}</p>
     </div></>
    );
  }


