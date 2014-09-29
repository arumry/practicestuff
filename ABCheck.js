var ABCheck = function (str) {
    var stringCheck;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' ) {
            if (str[i+4].toLowerCase() === 'b') {
                return true;
            }
        }
    }
    return false;
};



console.log(ABCheck("lane borrowed"));
