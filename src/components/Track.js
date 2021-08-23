import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../reducers/favoritesSlice'
import { convertSecondsToMinutesFormat } from "../utils/utilsFunctions";
import { TrackInfoGeneral, TrackInfoEach, TrackInfoButtons, MiniButton, MiniButtonAnchor } from '../styles/styles';

const Track = ({ trackData }) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);

  // Redux
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();
  const trackIndexInRedux = findTrackIndexInRedux();

  // Audio
  const previewAudio = trackData.preview;
  let audio = useRef();

  // Mounting
  useEffect(() => {
    audio.current = new Audio(previewAudio);
  }, [previewAudio]);


  // Unmounting
  useEffect(() => {
    return () => {
      audio.current.pause();
    }
  }, [])

  function playPauseAudioPreview() {
    let playing = isPlaying;
    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!playing);
  }

  function addRemoveFavorites() {
    if (isTrackInFavorites()) {
      dispatch(remove(trackIndexInRedux));
    } else {
      dispatch(add(trackData));
    }
  }

  function findTrackIndexInRedux() {
    return favorites.findIndex(f => f.id === trackData.id);
  }

  function isTrackInFavorites() {
    if (trackIndexInRedux === -1) {
      return false
    } else {
      return true
    }
  }

  return (
    <li>
      <TrackInfoGeneral>
        {trackData.album &&
          <TrackInfoEach>
            <img src={trackData.album.cover_small} alt="album-cover" />
          </TrackInfoEach>}
        <TrackInfoEach>
          {trackData.title}
        </TrackInfoEach>
        <TrackInfoEach>
          {trackData.album &&
            `Album: ${trackData.album.title}`}
        </TrackInfoEach>
        <TrackInfoEach>
          Duração {convertSecondsToMinutesFormat(trackData.duration)}
        </TrackInfoEach>
        <TrackInfoButtons>
          <MiniButtonAnchor href={trackData.link}>
            <i className="fas fa-headphones"></i>
          </MiniButtonAnchor>
          <MiniButton onClick={playPauseAudioPreview}>
            {isPlaying ?
              <i className="fas fa-pause"></i> :
              <i className="fas fa-play"></i>}
          </MiniButton>
          <MiniButton
            onClick={() => addRemoveFavorites()}
            style={isTrackInFavorites() ? 
              { backgroundColor: '#E6C557' } :
              { backgroundColor: '#7a7a7a' }
            }
          >
            <i className="fas fa-star"></i>
          </MiniButton>
        </TrackInfoButtons>
      </TrackInfoGeneral>
    </li>
  );
}

export default Track;