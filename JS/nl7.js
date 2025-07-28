// print this pattern

//       #
//     #   #
//   #       #
// #   #   #   #
// rows - 4, col -7

for (let row = 1; row <= 4; row++) {
    var rowContent = "";
    for (let col = 1; col <= 7; col++) {
        if(row == 4 || row + col == 5 || col - row == 3){
            rowContent += "#   ";
        }
        else{
            rowContent += "    ";
        }
    }
    console.log(rowContent);
}

