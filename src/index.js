/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var result = 0, ignoreIndex = [], index = 0;

  function findIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return true;
    }
    return false;
  }

  while( index < preferences.length ){
    var tmp = preferences[index];
    if( tmp-1 >= 0 ){
      var spichOne = tmp;
      var spichTwo = preferences[spichOne-1];
      var spichThree = preferences[spichTwo-1];    

      if( !findIndex(ignoreIndex, spichOne) && !findIndex(ignoreIndex, spichTwo) && !findIndex(ignoreIndex, spichThree) ){
        if( spichOne == preferences[spichThree-1] && spichOne != spichTwo && spichTwo != spichThree && spichThree != spichOne ){
          result++;
          ignoreIndex.push(spichOne);
          ignoreIndex.push(spichTwo);
          ignoreIndex.push(spichThree);
        }  
      } 
    }

    index++;    
  }

  return result;
};
