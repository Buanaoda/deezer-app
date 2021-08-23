import axios from 'axios';
import { deezerConfig } from './deezerConfig';

const { howManyTracksLoadbySearch} = deezerConfig;

const APP_URL = process.env.REACT_APP_URL ?
  process.env.REACT_APP_URL : 'http://localhost:8000/api';

export const getTracksChart = async () => {
  const request = await axios.get(`${APP_URL}/chart`);
  return request.data.tracks.data;
};

export const getTracksByArtist = async (string, category, index) => {
  const request = await axios.get(`${APP_URL}/search`,
  {
    headers: {
      string,
      category,
      limit: howManyTracksLoadbySearch,
      index
    },
  });
  const artistId = request.data.data[0].id;
  const artistTrackList = await axios.get(`${APP_URL}/tracks-by-artist`,
  {
    headers: {
      id: artistId
    },
  });
  console.log(artistTrackList.data.data.track)
  return artistTrackList.data.data;
};

export const searchTracksByName = async (string, category, index) => {
  const request = await axios.get(`${APP_URL}/search`,
  {
    headers: {
      string,
      category,
      limit: howManyTracksLoadbySearch,
      index
    },
  });
  const tracks = request.data.data;
  return tracks;
};

export const searchTracksByAlbum = async (string, category) => {
  const request = await axios.get(`${APP_URL}/search`,
  {
    headers: {
      string,
      category
    },
  });
  const albumId = request.data.data[0].id;
  const albumTrackList = await axios.get(`${APP_URL}/tracks-by-album`,
  {
    headers: {
      id: albumId
    },
  });
  return albumTrackList.data.data
};