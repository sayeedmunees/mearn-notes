//  swap to number without temp

x = 10;
y = 20;

console.log(`Before swaping: X = ${x} and Y = ${y}`);

x = x+y; //30
y = x-y; //10
x = x-y; //20

console.log(`After swaping: X = ${x} and Y = ${y}`);
