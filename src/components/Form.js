import React, { useState, useEffect, useRef } from "react";
import { getTracksByArtist, searchTracksByName, searchTracksByAlbum } from '../functions/deezer';
import { SearchInput, MiniButton, SelectOptions } from '../styles/styles';
import { deezerConfig } from '../functions/deezerConfig';

const { howManyTracksLoadbySearch } = deezerConfig;

const Form = ({ tracksChart, setTracksChart, index, setIndex, setShowLoad }) => {
  const [inputText, setInputText] = useState("");
  const [inputCategory, setInputCategory] = useState("track");
  const buttonElement = useRef();
  const currentLoadedTracks = useRef();
  let currentInputText = useRef();
  let currentCategory = useRef();
  let indexPersist = useRef();

  useEffect(() => {
    currentInputText.current = inputText;
    currentCategory.current = inputCategory;
    currentLoadedTracks.current = tracksChart;
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tracksChart]);

  const handleScroll = () => {
    const bottom = (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    );
    const searchInput = document.documentElement.getElementsByClassName('searchInput')[0].value;
    if (bottom && searchInput.length > 2) {
      setShowLoad(true);
      buttonElement.current.click();
    }
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const selectHandler = (e) => {
    setInputCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;
    handleSearchResultsIndexValue();
    handleSearchTracksByName();
    handleSearchTracksByArtistName();
    handleSearchTracksByAlbumName();
    updateIndexState();
  }

  const handleSearchTracksByName = async () => {
    if (inputCategory === "track") {
      const tracks = await searchTracksByName(inputText, inputCategory, indexPersist.current);
      handleSetTracksChart(tracks);
    }
  }

  const handleSearchTracksByArtistName = async () => {
    if (inputCategory === "artist") {
      const tracks = await getTracksByArtist(inputText, inputCategory, indexPersist.current);
      handleSetTracksChart(tracks);
    }
  }

  const handleSearchTracksByAlbumName = async () => {
    if (inputCategory === "album") {
      const tracks = await searchTracksByAlbum(inputText, inputCategory);
      handleSetTracksChart(tracks);
    }
  }

  const updateIndexState = () => {
    let indexUpdated = index + howManyTracksLoadbySearch;
    setIndex(indexUpdated);
  }

  const handleSetTracksChart = (tracks) => {
    if (conditionsToAppendNewTracksToTrackListAreTrue()) {
      tracks.forEach((t) => currentLoadedTracks.current.push(t));
      setTracksChart(currentLoadedTracks.current);
    } else {
      setTracksChart(tracks);
    }
    setShowLoad(false);
  }

  const handleSearchResultsIndexValue = () => {
    indexPersist.current = index;
    if (conditionsToZeroTheIndexAreMet()) {
      indexPersist.current = 0;
    }
  }

  const conditionsToZeroTheIndexAreMet = () => {
    return (
      currentInputText.current !== inputText ||
      currentCategory.current !== inputCategory
    );
  }

  const conditionsToAppendNewTracksToTrackListAreTrue = () => {
    return (
      currentLoadedTracks.current &&
      currentLoadedTracks.current.length &&
      currentInputText.current === inputText &&
      currentCategory.current === inputCategory
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput onChange={inputTextHandler} type="text" className="searchInput" />
      <MiniButton type="submit" ref={buttonElement}>
        <i className="fas fa-search"></i>
      </MiniButton>
      <div>
        <SelectOptions name="todos" onChange={selectHandler}>
          <option value="track">Título Musical</option>
          <option value="artist">Artista</option>
          <option value="album">Álbum</option>
        </SelectOptions>
      </div>
    </form>
  );
}

export default Form;