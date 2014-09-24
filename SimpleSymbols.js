function SimpleSymbols(str) { 
  var alphaAry = "abcdefghijklmnopqrstuvwxyz".split("");
  var result;
  for (var i = 0; i < str.length; i++) {
    for(var x = 0; x < alphaAry.length; x++) {
      if(str[i] === alphaAry[x]){
        if(str[i-1] === "+" && str[i+1] === "+") {
           result = true;
        }
        else {
           return false;
        }  
      }  
    }  
  }  
  return result; 
}
