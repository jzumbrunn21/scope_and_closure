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

function recVolume(height){
  let product = 1;

  product *= height;

  return function eachDim1 (dim){
    product *= dim;

    return function eachDim2(dim2){
      product *= dim2
      return product;
    }
  }
}

// let volume = recVolume();
// console.log(volume(6));
// console.log(volume(5));
// console.log(volume(4));
// console.log(volume(2));

// let volume = recVolume(1);
// console.log(volume);
// let dim1 = eachDim1(2);
// console.log(dim1)
// let dim2 = eachDim2(3);
// console.log(dim2)
// console.log(product);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
