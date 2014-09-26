function PrimeTime(num) {
  if (num === 1) {return false;}
    var i = 2;
    while (i < num) {
      if (num % i === 0) {return false;}
      i++;
    }
    return true;
}
