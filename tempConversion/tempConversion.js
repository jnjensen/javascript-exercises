const ftoc = function(far) {
  var celsius = ((far - 32) * (5/9)).toFixed(1);
  
  if (celsius[3] == 0){
    celsius.toFixed(0);
  }

  return Number(celsius);
}

const ctof = function(celsius) {
  var far = ((celsius * (9/5)) + 32).toFixed(1);

  return Number(far);
}

module.exports = {
  ftoc,
  ctof
}
