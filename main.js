// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log( 100*1000 ); // 100000
console.log(10**5); // 100000
console.log(10*10*10*10*10); // 100000
console.log(100000.00); // 100000
console.log(1000000/10); // 100000
console.log(+("100000")); // 100000
console.log(-"-100000"); // 100000
console.log(-"-100000"/true); // 100000
console.log(+"100000"/true); // 100000
console.log(10000+[(true+false)]-true); // 100000


console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


console.log( Number.MAX_SAFE_INTEGER -"9007199254740975" ); // 16


