// WAP to check if element 2 is in the given array or not

var numArray = [10, 11, 34, 2, 56, 78, 12];
flag = false;
for (num of numArray){
    if (num == 2){
        flag = true;
        break
    }
}
console.log(flag ? `element 2 is found` : `not found`);
