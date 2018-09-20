
function produceDrivingRange(blockRange){
  return function(tripDistance) {
    return tripDistance < blockRange;
  };
}
