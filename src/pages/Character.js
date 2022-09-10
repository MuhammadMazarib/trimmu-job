import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import "./Character.css"

export default function Character() {
    const {data,loading,error} = useCharacter(5);

    if(loading) return<div>sssss</div>
    if(error) return<div>errrrr</div>
  return (
    <div className='Character'>
        {data.characters.results.map(character =>{
            return (<div>
                <img src={character.image}/>
                <h2>character.name</h2>
                </div>);
        })};
    </div>
  );
}
