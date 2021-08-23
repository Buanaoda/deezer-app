const express = require('express');
const router = express.Router();

/* Controller */
const { getTracksChart, search, getTrackListByArtistId, getTrackListByAlbumId } = require('../controllers/deezer');

/* Routes */
router.get('/chart', getTracksChart);
router.get('/search', search);
router.get('/tracks-by-artist', getTrackListByArtistId);
router.get('/tracks-by-album', getTrackListByAlbumId);

module.exports = router;