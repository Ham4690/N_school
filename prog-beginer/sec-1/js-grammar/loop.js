function isFizzBuzz(x) {
    if ( x % 15 == 0 ) {
        return 'FizzBuzz';
    } else if ( x % 5 == 0 ) {
        return 'Buzz';
    } else if (x % 3 == 0 ) {
        return 'Fizz'
    }
    return x;
}

for(var i = 1; i <= 100000; i++) {
    document.write( isFizzBuzz(i) + ' ');
}