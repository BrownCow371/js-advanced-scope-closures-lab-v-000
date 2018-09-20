
function produceDrivingRange(blocks){
  return function(tripDistance) {
    return tripDistance < blocks;
  };
}
