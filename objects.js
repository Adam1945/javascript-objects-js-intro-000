var playlist = {
  michealJackson: "billiejean",
  bobMarley: "exodus",
  steveWonder: "superstition"
};

function updatePlaylist(playlist, 'artistName', 'songTitle'){
  playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete.obj.artistName;
  return playlist;
}
