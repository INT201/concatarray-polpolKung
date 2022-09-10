const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if(!array1 & !array2){
    return undefined
  } else if(!array1) {
      return array2
  } else if(!array2) {
      return array1
  } else {
      return array1.concat(array2)
  }
}
module.exports = concatArray
