/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

 */

function find_average(array) {
    var suma = 0;
    
    for (let i = 0; i < array.length; i++){
      suma += array[i]
    }
    if (suma == 0){
      return 0;
    }
    var promedio = suma / array.length
    return promedio;
  }


function average(array){
  var total = 0;
  var count = 0;

  array.forEach((item, index)=>{
    item += total
    count++
  });
  
  if(total === 0){
    return total;
  } else {
    return total / count;
  }
}