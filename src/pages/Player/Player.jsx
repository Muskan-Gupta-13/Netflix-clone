import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

const [apiData, setApiData] = useState({
  name: "",
  key:"",
  publised_at: "",
  typeof: ""
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2U5OWMyNjFmOTA3YWY3YTU5ZjA2M2I1NmUzMjQyMCIsIm5iZiI6MTcyMzkxMzAzNi43NjgwMDcsInN1YiI6IjY2YzAyMTMxMThlNjYyMmFkY2QzMWUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fCnt5YA-y5vOlNF0295MAlWfHqjldiK-aNhJFmdSd5s'
    }
  };

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  


  const naviagte = useNavigate();

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{naviagte(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
