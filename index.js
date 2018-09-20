
function produceDrivingRange(blockRange){
  return function(block1, block2) {
    let distance = Math.abs(block1.replace("th", "") - block2.replace("th", ""));
    if(distance > blockRange){
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  };
}
