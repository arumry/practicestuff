function FirstFactorial(num) { 
  var sum = num;
  for (var i = num; i > 0; i--) {
      if (i !== num){ 
      sum = sum * i;
      }    
  }    
  return sum; 
         
}
