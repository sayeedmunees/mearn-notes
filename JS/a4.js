// Predict the logic of problem
// input = [4,5,6]....[7,8,9]
// output = [11,10,9]....[17,16,15]

var inputArray = [4,5,6];
var outputArray = [];
var sum = 0;

for (num of inputArray){
    sum += num;
}

for (index in inputArray){

    // sum of array - each number
    outputArray.push(sum-inputArray[index])

    // adding or subtracting one
    // index == 0 ? outputArray.push((inputArray[1]*2)+1) : index == 1 ? outputArray.push((inputArray[1]*2)) : index == 2 ? outputArray.push((inputArray[1]*2)-1) : false

    // adding or subtracting 3
    // if (index == 0){
    //     outputArray.push((inputArray[0]*2)+3)
    // }else if (index == 1){
    //     outputArray.push((inputArray[1]*2))
    // }else if (index == 2){
    //     outputArray.push((inputArray[2]*2)-3)
    // }
}

console.log(outputArray);
