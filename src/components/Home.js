import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Form from "./Form";
import TrackList from "./TrackList";
import { getTracksChart } from '../functions/deezer';
import { NavBar, MainContent, MainContainer, LoaderContainer, Loader } from '../styles/styles';

const Home = () => {
  const [tracksChart, setTracksChart] = useState();
  const [index, setIndex] = useState(0);
  const [showLoad, setShowLoad] = useState(false);

  const getTracksChartOnFirstLoad = async () => {
    const tracks = await getTracksChart();
    setTracksChart(tracks);
  }

  useEffect(() =>{
    getTracksChartOnFirstLoad()
  }, []);

  useEffect(() => {
  }, [tracksChart]);

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
        <Link to="/favorites" style={linkStyle}><i className="fas fa-star"></i> Favoritos</Link>
      </NavBar>
      <MainContent>
        <h1>Explore.</h1>
        <div>
          <Form
            tracksChart={tracksChart}
            setTracksChart={setTracksChart}
            index={index}
            setIndex={setIndex}
            showLoad={showLoad}
            setShowLoad={setShowLoad}
          />
        </div>
        <div>
          <TrackList
            tracksChart={tracksChart}
          />
        </div>
        <LoaderContainer>
          {showLoad && <Loader />}
        </LoaderContainer>
      </MainContent>
    </MainContainer>
  );
}

export default Home;
