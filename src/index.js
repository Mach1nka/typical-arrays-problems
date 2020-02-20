
exports.min = function min (array) {
  if(array===undefined || array.length ===0){
    return 0;
  }else {
    function sorter(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }
    let arrSort = array.sort(sorter);
    return arrSort[0];
  }
}



exports.max = function max (array) {
  if(array===undefined || array.length ===0){
    return 0;
  }else {
    function sorter(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
  }
    let arrSort2 = array.sort(sorter).reverse();
    return arrSort2[0];
 }
}


exports.avg = function avg (array) {
  if(array===undefined || array.length ===0){
    return 0;
  }else {
    let leng = array.length;
    let reducer = (res, value)=> res+value;
    let sum = array.reduce(reducer);
    let avg = sum/leng;
    return avg;
 }
}
