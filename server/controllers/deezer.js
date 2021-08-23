const axios = require('axios');

exports.getTracksChart = async (req, res) => {
  try {
    const deezerChart = await axios.get(
      `${process.env.REACT_APP_DEEZER_API_URL}/chart`
    );
    res.status(200).json(deezerChart.data);
  } catch (error) {
    console.error(error);
  }
};

exports.search = async (req, res) => {
  try {
    const encodedString = encodeURI(req.headers.string);
    const deezerChart = await axios.get(
      `${process.env.REACT_APP_DEEZER_API_URL}/search/
      ${req.headers.category}/
      ?q=${encodedString}
      &limit=${req.headers.limit}
      &index=${req.headers.index}`
    );
    res.status(200).json(deezerChart.data);
  } catch (error) {
    console.error(error);
  }
};

exports.getTrackListByArtistId = async (req, res) => {
  try {
    const tracks = await axios.get(
      `${process.env.REACT_APP_DEEZER_API_URL}/artist/${req.headers.id}/top?limit=10`
    );
    res.status(200).json(tracks.data);
  } catch (error) {
    console.error(error);
  }
};

exports.getTrackListByAlbumId = async (req, res) => {
  try {
    const tracks = await axios.get(
      `${process.env.REACT_APP_DEEZER_API_URL}/album/${req.headers.id}/tracks`
    );
    res.status(200).json(tracks.data);
  } catch (error) {
    console.error(error);
  }
};