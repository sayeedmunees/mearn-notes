products=[

    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

// 1. print product name only :

console.log("-------------All products------------------");

products.forEach(item => {
    console.log(item.pName)
})


// 2. print all mobile details whose display is lcd :

console.log("-------------display is lcd------------------");

products.filter(item => item.display == 'lcd').forEach(item => console.log(item.pName))

// products.forEach(item => {
//     if (item.display == 'lcd'){
//         console.log(item.pName)
//     }
// } )

// 3. print 5g mobile phone Names :

console.log("-------------5g mobile phone Names------------------");

products.filter(item => item.band == '5g').forEach(item => console.log(item.pName))

// products.forEach(item => {
//     if (item.band == '5g'){
//         console.log(item.pName)
//     }
// } )

// 4. sort mobile based on price :

console.log("-------------sort mobile based on price------------------");

products.sort((p1, p2) => p1.price - p2.price)
products.forEach(item => console.log(item.pName))


// 5. print costly mobile :

console.log("-------------costly mobile------------------");

console.log(products.reduce((p1, p2) => p1.price > p2.price ? p1 : p2).pName);




// 6. print low cost mobile :

console.log("-------------low cost mobile------------------");

console.log(products.reduce((p1, p2) => p1.price < p2.price ? p1 : p2).pName);


