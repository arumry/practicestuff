var firstNonRepeatedCharacter = function (str) {
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return false;
};

alert(firstNonRepeatedCharacter('ABA'));
alert(firstNonRepeatedCharacter('AABCABD'));
