// print pattern

// 1
// 2   2
// 3   3   3
// 4   4   4   4


for (let row = 1; row <= 4; row++) {
    var rowContent = "";
    for (let col = 1; col <= row; col++) {
        rowContent += row + "  "
    }
    console.log(rowContent);
}