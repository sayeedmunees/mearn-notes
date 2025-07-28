// print this pattern

//       #
//     #   #
//   #   #   #
// #   #   #   #

var numberOfRows = 4;
for (let row = numberOfRows; row >= 1; row--) {
    var rowContent = "";
    for (let col = 1; col <= numberOfRows; col++) {
        if (row-col > 0) {
            rowContent += "   ";
        }else{
            rowContent += "#    ";
        }
    }
    console.log(rowContent);
}



// Another method

// for (let row = 1; row <= 4; row++) {
//     var rowContent = "";
//     for (let space = 3; space >= row; space--) {
//         rowContent += "   ";
//     }
//     for (let col = 1; col <= row; col++) {
//         rowContent += "#    ";
//     }
//     console.log(rowContent);
// }