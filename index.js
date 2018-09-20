
function produceDrivingRange(blockRange){
  return function(block1, block2) {
    let b1 = block1.replace("th", "");
    return Math.abs(block1-block2) < blockRange;
  };
}
