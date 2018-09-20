
function produceDrivingRange(blockRange){
  return function(block1, block2) {
    return Math.abs(block1-block2) < blockRange;
  };
}
