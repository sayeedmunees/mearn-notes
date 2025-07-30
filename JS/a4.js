// Predict the logic of problem
// input = [4,5,6]....[7,8,9]
// output = [11,10,9]....[17,16,15]

var inputArray = [7,8,9];
var outputArray = [];
for (index in inputArray){
    index == 0 ? outputArray.push((inputArray[1]*2)+1) : index == 1 ? outputArray.push((inputArray[1]*2)) : index == 2 ? outputArray.push((inputArray[1]*2)-1) : false

    // if (index == 0){
    //     outputArray.push((inputArray[1]*2)+1)
    // }else if (index == 1){
    //     outputArray.push((inputArray[1]*2))
    // }else if (index == 2){
    //     outputArray.push((inputArray[1]*2)-1)
    // }
}

console.log(outputArray);
