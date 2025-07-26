// print pattern

// #   #   #   #
// #   #   #   #
// #   #   #   #
// #   #   #   #



for (let row = 0; row < 4; row++) {
    var rowContent = "";
    for (let col = 0; col < 4; col++) {
        rowContent += "#  "
    }
    console.log(rowContent);
}


// Better alternative, avoiding nested loops, more time

var rowContent = "";

for (let col = 0; col < 4; col++) {
    rowContent += "#  "
}

for (let row = 0; row < 4; row++) {
    console.log(rowContent);
}
