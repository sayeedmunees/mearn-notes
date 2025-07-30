// WAP to check if element 2 is in the given array or not

var numArray = [10, 11, 34, 2, 56, 78, 12];

numArray.sort((a, b) => a-b);

var count = 0;
var searchKey = 34;
var flag =false

var lowIndex = 0;
var upIndex = numArray.length-1;

while (lowIndex <= upIndex){
    count++
    var  midIndex = Math.floor((lowIndex + upIndex)/ 2);
    if (numArray[midIndex] == searchKey){
        flag = true;
        break
    }else if (numArray[midIndex] < searchKey){
        lowIndex = midIndex+1;
    }else if (numArray[midIndex] > searchKey){
        upIndex = midIndex-1;
    }
}

console.log(flag ? `element is found` : `not found`);