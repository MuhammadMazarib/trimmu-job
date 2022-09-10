
import React, { useState } from 'react'

function Button({children}) {
    return <button>{children}</button>;
  }

function Card(props) {
    
    const [readMore, setReadMore] = useState(false);
  return (
    
    <section className="container center">
        
      <div className="center">
        <div className="job">
        <div class="column" >
        <div><h3 id="hTitle">Title:{props.title}</h3></div>
        <p>
          {readMore ? props.description: `${props.description.substring(0, 200)}...`}
          <button className='btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
          </p>
        </div>


        <div class="column" >
        <div><h4> Company Name:</h4>{props.name} 
        </div>
        <div>
          <h5>Published: </h5>
          {props.isPublished ?  "Yes": "No"}
        </div>
        <div><h4>Email:</h4>
        
        {props.userEmail ?  props.userEmail: "Nil"}
        </div>
        
        <a href={props.applyUrl} target="_blank" rel="noreferrer">
          <Button>Apply</Button>
        </a>
        </div>
        
       


         
        
          
       
        </div>
      </div>
    </section>
  );
}

export default Card;


