function FirstReverse(str) { 
  var reverse = [];
  for (var i = 0; i < str.length; i++) {
       reverse.unshift(str[i]);
  } 
  return reverse.join("");      
}