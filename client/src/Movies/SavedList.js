import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

export default function SavedList(props) {
  const history = useHistory();
  const routeToHome = () => {
    history.push("/");
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movie/${movie.id}`} key={movie.id}>
          <span className="saved-movie" >{movie.title}</span>
        </NavLink>
      ))}
      <div className="home-button" onClick={routeToHome}>Home</div>
    </div>
  );
}