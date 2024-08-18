import React, { useEffect, useRef, useState,} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({title, category}) => {

 //const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(); 
  //const options = {
   // method: 'GET',
    //headers: {
     //// accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2U5OWMyNjFmOTA3YWY3YTU5ZjA2M2I1NmUzMjQyMCIsIm5iZiI6MTcyMzkxMzAzNi43NjgwMDcsInN1YiI6IjY2YzAyMTMxMThlNjYyMmFkY2QzMWUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fCnt5YA-y5vOlNF0295MAlWfHqjldiK-aNhJFmdSd5s'
    //}
  //};
  

   

const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
 // fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    //.then(response => response.json())
    //.then(response => setApiData(response.results))
    //.catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
