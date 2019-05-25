var playlist = {
  artistName: `[songTitle]`
};

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, obj, { artistName: songTitle });
};

function removeFromPlaylist(obj, key){
  delete obj.key;
}
