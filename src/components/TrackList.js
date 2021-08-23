import React, { useEffect, useState } from "react";
import Track from "./Track";
import { TrackListStyles, TrackDiv } from '../styles/styles';

const TrackList = ({ tracksChart }) => {

  const mapTracks = () => {
    return tracksChart.map((t, index) => {
      return (
        <TrackDiv key={index}>
          <Track 
            trackData={t}
            key={index}
          />
        </TrackDiv>
      );
    });
  }

  useEffect(() => {

  }, [tracksChart]);

  return (
    <TrackListStyles>
      {
        tracksChart && mapTracks()
      }
    </TrackListStyles>
  );
}

export default TrackList;