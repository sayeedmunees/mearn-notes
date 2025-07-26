// print pattern

// 1   2   3   4
// 1   2   3   4
// 1   2   3   4
// 1   2   3   4

for (let row = 0; row < 4; row++) {
    var rowContent = "";
    for (let col = 1; col <= 4; col++) {
        rowContent += `${col}  `
    }
    console.log(rowContent);
}
