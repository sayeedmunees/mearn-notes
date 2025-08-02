// [id,name,price,stock]

products =[

    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]



// 1. display all product name : forEach

console.log("Display all product name:");
products.forEach(a => console.log(a[1]));

// 2. display product whose price < rs.50 : filter

console.log("Product whose price < rs.50");
products.filter(a => a[2] > 50).forEach(a => console.log(a[1]))

// 3. print price of oreo : find

console.log("Display price of oreo:");
const oreoDetails = products.find(a => a[1] == 'oreo');
console.log(`${oreoDetails[2]}`);

// 4.print costly product name: reduce

console.log("Display costly product name:");
const costlyProduct = products.reduce((a, b) => a[2] > b[2] ? a : b);
console.log(`${costlyProduct[1]}`);

// 5. display out of stock product name: filter

console.log("Display out of stock product name:");
products.filter(a => a[3] == 0).forEach(a => console.log(a[1]));

// 6. sort products based on stock  in decending order: sort

console.log("Display products based on stock  in decending order:");
products.sort((a, b) => b[3] - a[3]).forEach(a => console.log(a[1]));

// 7. print product having maximum availabe stock: reduce

console.log("Display product having maximum availabe stock:");
const maxStock = products.reduce((a, b) => a[3] > b[3] ? a : b);
console.log(maxStock[1]);

// 8. Is there any product can be purchased by Rs. 10: some

console.log("Is there any product can be purchased by Rs. 10?");
console.log(products.some(a => a[2] <= 10) ? 'Yes' : 'No');

// 9. Is there any product in the range of 10 to 30 : some

console.log("Is there any product in the range of 10 to 30?");
console.log(products.some(a => a[2] > 10 && a[2] < 30) ? 'Yes' : 'No');

// 10. Print all products in the range of 10 to 30: filter

console.log("Display all products in the range of 10 to 30:");
products.filter(a => a[2] >= 10 && a[2] <= 30).forEach(a => console.log(a[1]))
