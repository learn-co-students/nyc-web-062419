// outer function
function createColoredLogger(color) {
  // inner function
  return function(phrase){
    console.log(`%c ${phrase}`, `color: ${color}`)
  }
}

function applyTaxes(taxRate){
  return function(dollarAmount){
    return dollarAmount + dollarAmount * (taxRate / 100)
  }
}

let arr = [1,2,3,4]

// for(let i = 0; i<arr.length; i++){
//   console.log(arr[i])
// }




function myForEach(arr, callback){
  for(let i = 0; i<arr.length; i++){
    callback(arr[i])
  }
}





