import React from 'react';
import { Link } from 'react-router-dom';
export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(id => ( 
        <span key={id} className="saved-movie">{props.movies.find((item)=>item.id==id).title}</span>
      ))}
      <Link to={`/`}>
      <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}
