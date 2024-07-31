const convertToCelsius = function(deg) {
  let cel = (deg - 32 )* 5/9 
   return Number(cel.toFixed(1))  
};

const convertToFahrenheit = function(deg) {
 let fahr =  (deg * 9/5 +32)
  return Number(fahr.toFixed(1)) 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
