
function sum_array(array) {
  return array.reduce(function(prev, curr) { return prev + curr; }, 0);
}

function maximum_subarray_mid(array) {
  var mid = Math.floor(array.length/2);
  var greatestSum = array[mid];
  var sumSoFar = array[mid];
  // Calculate the greatest subarray to the left
  var begin = mid;
  for( var i = begin-1; i >= 0; i-- ) {
    sumSoFar += array[i];
    if( sumSoFar > greatestSum ) {
      begin = i;
      greatestSum = sumSoFar;
    }
  }
  // Reset things, and then find the greatest subarray to the right
  greatestSum = array[mid];
  sumSoFar = array[mid];
  var end = mid;
  for( var i = begin+1; i < array.length; i++ ) {
    sumSoFar += array[i];
    if( sumSoFar > greatestSum ) {
      end = i;
      greatestSum = sumSoFar;
    }
  }
  return array.slice(begin, end+1);
}

function maximum_subarray(array) {
  if( array.length === 1 ) {
    return array;
  }
  else {
    var mid = Math.ceil(array.length/2);
    var max_left = maximum_subarray(array.slice(0, mid));
    var max_right = maximum_subarray(array.slice(mid, array.length));
    var max_mid = maximum_subarray_mid(array);

    var max = max_left;
    if( sum_array(max_mid) > sum_array(max_left) ) {
      max = max_mid;
    }
    if( sum_array(max_right) > max ) {
      max = max_right;
    }
    return max;
  }
}
