//  arithmetic operators

// modulus %
x = 10;
console.log(`Modulus of ${x} by 3 = ${x%3}`);

y = 12345;
console.log(`Last digit of ${y} = ${y%10}`);

// power **

z = 5;
console.log(`2 to the power of ${z} = ${z**2}`);


// relational operator (<, <=, >, >=, ==, ===)

console.log(`Is variable x greater than y? : ${x>y}`);

z = '10';
console.log(`X == Z? : ${x==z}`);
console.log(`X === Z? : ${x===z}`);


// Logical Operator

// check if W is in between X and Y
w = 20;
console.log(`Is W in between X and Y? : ${w>x && w<y}`);


// Increment / Decrement

a = 10;
console.log(`a = ${a}`);

console.log(`a++ = ${a++}`);
console.log(`a = ${a}`);

console.log(`++a = ${++a}`);
console.log(`a = ${a}`);


a = 10;
console.log(`a = ${a}`);

console.log(`a-- = ${a--}`);
console.log(`a = ${a}`);

console.log(`--a = ${--a}`);
console.log(`a = ${a}`);

//Short hand op

var q = 20;
q = q + 10;
console.log(`q = ${q}`);

var r = 20;
r += 10; //using shorthand op
console.log(`r = ${r}`);
