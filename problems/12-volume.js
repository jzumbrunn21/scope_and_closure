/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// function recVolume(height){
//   let product = 1;

//   product *= height;

//   return function eachDim1 (dim){
//     product *= dim;

//     return function eachDim2(dim2){
//       product *= dim2
//       return product;
//     }
//   }
// }

function recVolume(height) {
  let sides = [height]

  let res = function(num) {
    sides.push(num)
    if(sides.length >= 3){
      let [h,l,w] = sides
      return h * l * w
    }else{
      return res
    }
  }
  return res
}

let side = recVolume(2)
console.log(side(1))
console.log(side(2))
console.log(side(3))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
