// print pattern

// #
// #   #
// #   #   #
// #   #   #   #



for (let row = 0; row < 4; row++) {
    var rowContent = "";
    for (let col = 0; col <= row; col++) {
        rowContent += "#  "
    }
    console.log(rowContent);
}
