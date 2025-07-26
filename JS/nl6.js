// print pattern

//       #
//     #   #
//   #   #   #
// #   #   #   #

var numberOfRows = 5;
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