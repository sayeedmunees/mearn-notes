// Nested Array
// print number < 10

var nestedArray = [[10,20], [30,2,30], [23,9,8,5] ,[23,45,54]]

for(let subArray of nestedArray){
    // console.log(subArray);
    
    for (let num of subArray){
        if (num < 10){
            console.log(num);
        }
    }
}