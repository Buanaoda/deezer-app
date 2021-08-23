import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Track from './Track';
import { MainContainer, NavBar, MainContent, TrackListStyles, TrackDiv } from '../styles/styles';

const Favorites = () => {
  // Redux
  const favorites = useSelector(state => state.favorites.favorites);

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: 'black',
    marginTop: '25px',
    outline: 'none',
    textDecoration: 'none',
    backgroundColor: '#E6C557',
    padding: '8px 15px',
    borderRadius: '15px'
  }

  return (
    <MainContainer>
      <NavBar>
        <Link to="/" style={linkStyle}><i className="fas fa-home"></i> Home</Link>
      </NavBar>
      <MainContent>
        <h1>Favoritos</h1>
        <TrackListStyles className="track-list">
          {favorites.length > 0 ?
            favorites.map((f, index) => {
              return <TrackDiv key={index}><Track trackData={f} key={index} /></TrackDiv>
            }) :
            <h3>Não Há favoritos ainda  :)</h3>
          }
        </TrackListStyles>
      </MainContent>
    </MainContainer>
  );
}

export default Favorites;